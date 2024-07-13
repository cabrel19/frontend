import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackHome from '@/components/backHome';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { GeoPoint, addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import { Alert } from 'react-native';
import calculateDistance from '@/utils/distance';
import RIDE_STATUS from '@/utils/status';
import { getAuth } from 'firebase/auth';

interface UserData {
    lieu_depart: GeoPoint;
    lieu_arrivée: GeoPoint;
    statut: RIDE_STATUS;
    distance: string;
    basePrice: string;
    nameClient: string;
    name: string;
    phone: string;
}


const Commander = ({ navigation, route }: any) => {

    const { destination } = route.params;
    const mapRef = useRef<MapView>(null);
    const [origin, setOrigin] = useState<{ latitude: number, longitude: number }>(() => ({ latitude: 0, longitude: 0 }));
    const [selectionner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cab, setCab] = useState<{ id: number, price: number }>({ id: undefined as unknown as number, price: undefined as unknown as number })
    const [originReady, setOriginReady] = useState(false);
    const [waitConfirm, setWaitConfirm ] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

    // useEffect(() => {
    //     let intervalId: NodeJS.Timeout;
    //     const getLocationPermission = async () => {
    //         const updateLocation = async () => {
    //             let location = await Location.getCurrentPositionAsync({});
    //             const current = {
    //                 latitude: location.coords.latitude,
    //                 longitude: location.coords.longitude,
    //             };
    //             setOrigin(current);
    //         };

    //         updateLocation();
    //         intervalId = setInterval(updateLocation, 1000);
    //     };

    //     getLocationPermission();

    //     return () => clearInterval(intervalId);
    // }, []);

    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };
    const recenterMap = () => {
        if (mapRef.current && origin) {
            mapRef.current.animateToRegion({
                ...origin,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            }, 2000);
        }
    };


    const initialValue: UserData = {
        lieu_depart: new GeoPoint(origin.latitude, origin.longitude),
        lieu_arrivée: new GeoPoint(destination.latitude, destination.longitude),
        statut: RIDE_STATUS.INITIALIZED,
        distance: '',
        basePrice: '',
        nameClient: '',
        name: '',
        phone: '',
    }

    useEffect(() => {
        const updateLocation = async () => {
            try {
                let location = await Location.getCurrentPositionAsync({});
                const current = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                setOrigin(current);
                setOriginReady(true);
            } catch (error) {
                console.error("Erreur lors de la mise à jour de la position :", error);
            }
        };

        const locationSubscription = Location.watchPositionAsync(
            { accuracy: Location.Accuracy.High, timeInterval: 3000, distanceInterval: 1 },
            (location) => {
                const current = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                setOrigin(current);
            }
        );

        updateLocation();

        return () => {
            locationSubscription.then((sub) => sub.remove());
        };
    }, []);

    const createCommande = async () => {
        setLoading(true);
        try {
            const user = getAuth().currentUser;
            if (user) {
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (userDoc.exists()) {
                    const userDataFromFirestore = userDoc.data() as UserData;

                    const calculatedDistance = calculateDistance(
                        origin.latitude,
                        origin.longitude,
                        destination.latitude,
                        destination.longitude
                    );
                    const newCommande = {
                        lieu_depart: new GeoPoint(origin.latitude, origin.longitude),
                        lieu_arrivée: new GeoPoint(destination.latitude, destination.longitude),
                        statut: RIDE_STATUS.INITIALIZED,
                        distance: calculatedDistance,
                        prix: cab.price,
                        category: cab.id,
                        nameClient: userDataFromFirestore.name,
                        phoneClient: userDataFromFirestore.phone,
                    };

                    const docRef = await addDoc(collection(firestore, "commandes"), newCommande);
                    
                    listenForCommandeAcceptance(docRef.id);
                    setWaitConfirm(true);
                    Alert.alert("Commande créée", "Votre commande est en attente d'acceptation.");
                    // Définir le délai de 40 secondes
                    timeoutRef.current = setTimeout(() => {
                        handleTimeout(docRef.id);
                    }, 45000);
                } else {
                    setLoading(false);
                    Alert.alert("Erreur", "Aucune donnée utilisateur trouvée.");
                }
            }
        } catch (error: any) {
            setLoading(false);
            Alert.alert("Une erreur lors de la creation de la commande", error.message);
        }
    };

    const listenForCommandeAcceptance = (commandeId: string) => {
        const commandeDocRef = doc(firestore, "commandes", commandeId);
        const unsubscribe = onSnapshot(commandeDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                const commandeData = docSnapshot.data() as UserData;
                if (commandeData.statut === RIDE_STATUS.ACCEPTED) {
                    unsubscribe(); // Arrêter d'écouter les modifications après acceptation
                    clearTimeout(timeoutRef.current!); // Annuler le délai si la commande est acceptée
                    navigation.navigate('Chauffeur', { commandeId });
                }
            }
        });
    };

    const handleTimeout = async (commandeId: string) => {
        try {
            await deleteDoc(doc(firestore, "commandes", commandeId));
            Alert.alert("Commande annulée", "Aucun chauffeur n'a accepté la commande dans le délai imparti.");
            navigation.navigate('Home');
        } catch (error: any) {
            Alert.alert("Erreur", "Une erreur est survenue lors de l'annulation de la commande.");
        }
    };

    const space = () => {
        return <View style={styles.space} />;
    };

    const data = [
        {
            id: "1",
            image: require('@/assets/images/moto.png'),
            titre: 'Moto',
            basePrice: 135
        },
        {
            id: "2",
            image: require('@/assets/images/eco.png'),
            titre: 'Eco',
            basePrice: 286
        },
        {
            id: "3",
            image: require('@/assets/images/confort.png'),
            titre: 'Confort',
            basePrice: 313
        },
        {
            id: "4",
            image: require('@/assets/images/rapide.png'),
            titre: 'Confort+',
            basePrice: 401
        },

    ];

    const calculateMontant = ({ basePrice }: { titre: string; basePrice: number;}) => {
        var distance = calculateDistance(origin.latitude, origin.longitude, destination?.latitude as number, destination?.longitude as number);

        var montant = basePrice * distance;

        if (montant % 25 !== 0) {
            var a = montant / 25

            var newMontant = 25 * (Math.round(a) + 1)
            return Math.round(newMontant)
        } else {
            return Math.round(montant)
        }
    }

    return (
        <View style={styles.container}>


            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={regionInitiale}
                showsMyLocationButton
                showsUserLocation={true}

            >

                <Marker
                    coordinate={origin}
                    title="Ma position"
                    description={"Départ"}
                    pinColor='#088A4B'
                    draggable
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />

                <Marker
                    coordinate={destination}
                    title="Destination"
                    description={"Arrivée"}
                />
                {origin && (

                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={"AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k"}
                        // apikey={process.env.GOOGLE_MAPS_KEY ?? ""}
                        strokeWidth={4}
                        strokeColor="#088A4B"
                    />
                )}
            </MapView>

            <TouchableOpacity style={styles.button} onPress={recenterMap}>
                <FontAwesome5 name="search-location" color="#088A4B" size={24} />
            </TouchableOpacity>

            <View style={styles.overlay}>

                <BackHome />
                <Text style={{ fontSize: 20 }}>Options de prise en charge</Text>
                <View style={{ width: "100%", height: '50%', marginTop: '3%' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            const select = item.id === cab.id?.toString();
                            return (
                                <View style={styles.flatlist}>
                                    <TouchableOpacity
                                        style={[styles.choice, select && styles.selectionner]}
                                        onPress={() => setCab({ id: Number(item.id), price: calculateMontant(item) })}
                                    >
                                        <Image source={item.image}
                                            style={{ height: '100%', width: '27%' }}
                                        />

                                        <View style={styles.confortMoto}>
                                            <Text style={styles.textEco}>{item.titre}</Text>
                                            <Text style={styles.textbasePrice}>{calculateMontant(item)} XAF</Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        extraData={selectionner}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={space}
                    />
                </View>

                <TouchableOpacity style={styles.promo} onPress={() => navigation.navigate("Offres")}>
                    <Image source={require('@/assets/images/promo.png')} style={{ height: '55%', width: '9%' }} />

                    <View style={styles.text}>
                        <Text style={styles.textPromo}> Obtenez 50% de reduction lors de votre prochain trajet </Text>
                    </View>
                    <AntDesign name="right" size={20} color="#088A4B" style={{ marginLeft: '6%', width: '7%' }} />
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={createCommande}
                    style={[styles.commander, cab.id ? styles.bouton : null]}
                    disabled={cab.id ? false : true}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text style={styles.textCommande}> COMMANDER </Text>
                    )}
                    {waitConfirm ? (
                        <Text style={styles.textCommande}> Veuillez patienter </Text>
                    ) : null}
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    space: {
        marginTop: '2%',
    },

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    map: {
        width: '100%',
        height: '50%',
    },
    markerIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    button: {
        position: 'absolute',
        bottom: '81%',
        alignSelf: 'flex-end',
        right: '2%',
        width: '13%',
        height: '6%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    overlay: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: '50%',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: '1%',
    },
    flatlist: {
        flex: 1,
        width: '94%',
        height: '50%',
        alignSelf: 'center',
        // backgroundColor: '#AEAEAE',
        // borderRadius: 10,
    },
    selectionner: {
        borderColor: 'green',
        borderWidth: 2
    },
    choice: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        padding: 10,
        marginTop: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    confort: {
        width: '60%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        marginLeft: '3%'
    },
    confortMoto: {
        width: '60%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        marginLeft: '15%'
    },
    textEco: {
        height: '50%',
        textAlign: 'center',
        fontSize: 17,
        color: '#088A4B'
    },
    textbasePrice: {
        height: '50%',
        textAlign: 'center',
        fontSize: 17
    },
    promo: {
        width: '90%',
        height: '13%',
        marginTop: '4%',
        flexDirection: 'row',
        padding: '1%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        shadowOpacity: 2,
        shadowColor: '#eee',
        backgroundColor: 'white'
    },
    text: {
        width: '75%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '4%',
    },
    textPromo: {
        alignItems: 'center',
        fontSize: 15,
    },
    lines: {
        width: '75%',
        height: 1,
        backgroundColor: '#dddddd',
        marginBottom: '1%',
    },
    commander: {
        width: '40%',
        height: '13%',
        marginTop: '2%',
        backgroundColor: '#BBBBBB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bouton: {
        backgroundColor: '#088A4B'
    },
    textCommande: {
        fontSize: 17,
        color: '#FFFFFF'
    },

});

export default Commander;