import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Dimensions, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackHome from '@/components/backHome';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { GeoPoint, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
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
    password: string;
}


const Commander = ({ navigation, route }: any) => {

    const { destination } = route.params;
    const mapRef = useRef<MapView>(null);
    // console.log('destinationPrice', price)
    const [origin, setOrigin] = useState<any>({ latitude: 4.094354, longitude: 9.7393663, });
    const [selectionner, setSelectionner] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cab, setCab] = useState<{ id: number, price: number }>({ id: undefined as unknown as number, price: undefined as unknown as number })

    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };
    const recenterMap = () => {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                ...origin,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
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
        password: '',
    }

    const [commande, setCommande] = useState<UserData>(initialValue);

    useEffect(() => {
        const updateLocation = async () => {
            try {
                let location = await Location.getCurrentPositionAsync({});
                const current = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                setOrigin(current);
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
                    };

                    await addDoc(collection(firestore, "commandes"), newCommande);
                    await findNearbyChauffeurs();

                    setLoading(false);
                    navigation.navigate('Chauffeur');
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

    const findNearbyChauffeurs = async () => {
        const radius = 1000;
        const chauffeursRef = collection(firestore, "users");
        const q = query(chauffeursRef, where("statut", "==", "chauffeur"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const chauffeur = doc.data();
            console.log("chauffeur", chauffeur)
            const chauffeurLocation = new GeoPoint(chauffeur.location.latitude, chauffeur.location.longitude);
            console.log("location", chauffeurLocation)
            const distance = haversineDistance(origin.latitude, origin.longitude, chauffeur.location.latitude, chauffeur.location.longitude);
            console.log("distance", distance)
            if (distance <= radius) {
                sendNotificationToChauffeur(chauffeur.token);
            }
        });
    };

    const sendNotificationToChauffeur = async (token: string) => {
        const message = {
            content: {
                title: 'Nouvelle commande',
                body: 'Vous avez une nouvelle demande de course',
                sound: 'default',
                data: { someData: 'goes here' },
            },
            trigger: {
                seconds: 1,
            },
        };

        await Notifications.scheduleNotificationAsync(message);
        console.log("message", message)
    };

    const haversineDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
        const toRad = (value: number) => (value * Math.PI) / 180;
        const R = 6371e3;
        const φ1 = toRad(lat1);
        const φ2 = toRad(lat2);
        const Δφ = toRad(lat2 - lat1);
        const Δλ = toRad(lng2 - lng1);

        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c;
        // console.log ('succes', {d})
        return d;
    };

    const space = () => {
        return <View style={styles.space} />;
    };

    const data = [
        {
            id: "1",
            image: require('@/assets/images/moto.png'),
            titre: 'Moto',
            basePrice: 141
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

    const calculateMontant = ({ basePrice }: {
        titre: string;
        basePrice: number;
    }) => {
        const distance = calculateDistance(origin.latitude, origin.longitude, destination?.latitude as number, destination?.longitude as number);

        const montant = basePrice * distance;

        return Math.round(montant)
    }

    return (
        <View style={styles.container}>

            {origin && (
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={regionInitiale}
                    showsMyLocationButton
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
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={process.env.GOOGLE_MAPS_KEY ?? ""}
                        strokeWidth={4}
                        strokeColor="#088A4B"
                    />
                </MapView>
            )}
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
        bottom: '84%',
        alignSelf: 'flex-end',
        right: '3%',
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