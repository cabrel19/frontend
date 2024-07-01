import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { getAuth } from 'firebase/auth';
import { GeoPoint, collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k");


interface UserData {
    name: string;
    phone: string;
    password: string;
    lieu_depart: GeoPoint;
    lieu_arrivée: GeoPoint;
    statut: string[];
    prix: string;
    distance: string;
    nameClient: string;
}

const HomeChauffeur = ({ navigation }: any) => {

    const [selectStatut, setSelectStatut] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [commandes, setCommandes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData | null>(null);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };


    const handleChangeStatut = ({ statut }: any) => {
        setSelectStatut(statut);
        setShowPicker(false);
    };

    const fetchAddress = async (geoPoint: GeoPoint) => {
        try {
            const response = await Geocoder.from(geoPoint.latitude, geoPoint.longitude);
            if (response.results.length > 0) {
                return response.results[0].formatted_address;
            } else {
                return `${geoPoint.latitude}, ${geoPoint.longitude}`;
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'adresse :", error);
            return `${geoPoint.latitude}, ${geoPoint.longitude}`;
        }
    };

    useEffect(() => {
        const fetchAddresses = async () => {
            const commandesWithAddresses = await Promise.all(commandes.map(async (commande) => {
                const departAddress = await fetchAddress(commande.lieu_depart);
                const arriveeAddress = await fetchAddress(commande.lieu_arrivée);
                return {
                    ...commande,
                    departAddress,
                    arriveeAddress
                };
            }));
            setCommandes(commandesWithAddresses);
        };
    
        if (commandes.length > 0) {
            fetchAddresses();
        }
    }, [commandes]);
    

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = getAuth().currentUser;
                if (user) {
                    const userDoc = await getDoc(doc(firestore, "users", user.uid));
                    if (userDoc.exists()) {
                        const userDataFromFirestore = userDoc.data() as UserData;
                        setUserData(userDataFromFirestore);
                    } else {
                        Alert.alert("Erreur", "Aucune donnée utilisateur trouvée.");
                    }
                } else {
                    Alert.alert("Erreur", "Utilisateur non connecté.");
                }
                setLoading(false);
            } catch (error: any) {
                Alert.alert("Erreur", `Erreur lors de la récupération des données: ${error.message}`);
            }
        };

        const fetchCommandes = () => {
            const commandesCollection = collection(firestore, "commandes");
            const q = query(commandesCollection);
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                querySnapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        setCommandes(prev => [...prev, change.doc.data()]);
                    }
                    if (change.type === "modified") {
                        setCommandes(prev => prev.map(commande => commande.id === change.doc.id ? change.doc.data() : commande));
                    }
                    if (change.type === "removed") {
                        setCommandes(prev => prev.filter(commande => commande.id !== change.doc.id));
                    }
                });
                setLoading(false);
            }, (error) => {
                Alert.alert("Erreur", `Erreur lors de la récupération des commandes: ${error.message}`);
                setLoading(false);
            });

            return unsubscribe;
        };

        fetchUserData();
        const unsubscribeCommandes = fetchCommandes();

        return () => {
            unsubscribeCommandes();
        };
    }, []);

    const data = [
        {
            id: "1",
            image1: require('@/assets/images/profit.jpg'),
            image2: require('@/assets/images/money.png'),
            location: "location-pin",
            car: "car",
            nom: 'Cabrel NYA',
            depart: 'Ndogbong, commissariat 10eme',
            arrivée: 'Bonamoussadi, carrefour IPPB',
            prix: '800XAF',
            distance: '620m',
            accepter: 'ACCEPTER',

        },
        {
            id: "2",
            image1: require('@/assets/images/profit.jpg'),
            image2: require('@/assets/images/money.png'),
            location: "location-pin",
            car: "car",
            nom: 'Cabrel NYA',
            depart: 'Ndogbong, commissariat 10eme',
            arrivée: 'Bonamoussadi, carrefour IPPB',
            prix: '800XAF',
            distance: '620m',
            accepter: 'ACCEPTER',
        },
        {
            id: "3",
            image1: require('@/assets/images/profit.jpg'),
            image2: require('@/assets/images/money.png'),
            location: "location-pin",
            car: "car",
            nom: 'Cabrel NYA',
            depart: 'Ndogbong, commissariat 10eme',
            arrivée: 'Bonamoussadi, carrefour IPPB',
            prix: '800XAF',
            distance: '620m',
            accepter: 'ACCEPTER',
        },
        {
            id: "4",
            image1: require('@/assets/images/profit.jpg'),
            image2: require('@/assets/images/money.png'),
            location: "location-pin",
            car: "car",
            nom: 'Cabrel NYA',
            depart: 'Ndogbong, commissariat 10eme',
            arrivée: 'Bonamoussadi, carrefour IPPB',
            prix: '800XAF',
            distance: '620m',
            accepter: 'ACCEPTER',
        },
        {
            id: "5",
            image1: require('@/assets/images/profit.jpg'),
            image2: require('@/assets/images/money.png'),
            location: 'location-pin',
            car: 'car',
            nom: 'Cabrel NYA',
            depart: 'Ndogbong, commissariat 10eme',
            arrivée: 'Bonamoussadi, carrefour IPPB',
            prix: '800XAF',
            distance: '620m',
            accepter: 'ACCEPTER',
        },
    ];

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //       try {
    //         const user = getAuth().currentUser;
    //         if (user) {
    //           const userDoc = await getDoc(doc(firestore, "commande", user.uid));
    //           if (userDoc.exists()) {
    //             const userDataFromFirestore = userDoc.data()  as UserData;
    //             console.log('succes', {userDataFromFirestore})
    //             setUserData(userDataFromFirestore);
    //           } else {
    //            // Alert.alert("Erreur", "Aucune donnée utilisateur trouvée.");
    //           }
    //         } else {
    //           Alert.alert("Erreur", "Utilisateur non connecté.");
    //         }

    //       } catch (error: any) {
    //         Alert.alert("Erreur", `Erreur lors de la récupération des données: ${error.message}`);
    //       }
    //     };

    //     fetchUserData();
    //   }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Reglage")}>
                    <Entypo
                        name='menu'
                        size={40}
                        color="#088A4B"

                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.statut} onPress={togglePicker}>
                    <View style={styles.point}></View>
                    <Text style={{ marginLeft: '3%', color: '#088A4B', fontSize: 15 }}>{selectStatut ? selectStatut : 'Statut'}</Text>
                    <AntDesign
                        name='down'
                        size={18}
                        color="#088A4B"
                        style={{ marginLeft: '3%' }}
                    />
                </TouchableOpacity>

                {showPicker && (
                    <Picker
                        selectedValue={selectStatut}
                        onValueChange={(itemValue) => handleChangeStatut(itemValue)}
                        style={styles.picker}
                    // selectionColor='#088A4B'
                    >
                        <Picker.Item label="En service" value="En service" />
                        <Picker.Item label="Hors service" value="Hors service" />
                    </Picker>
                )}

                <TouchableOpacity style={{ justifyContent: 'center', marginLeft: '22%' }} >
                    <Ionicons
                        name='notifications-circle-outline'
                        size={40}
                        color="#088A4B"
                    />
                </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center', width: '60%', marginTop: '5%', height: '5%', marginLeft: '7%', justifyContent: 'center' }}>

                <Text style={{ fontSize: 22, textAlign: 'center', }}> Bienvenue,
                    {userData && (<Text style={{ fontWeight: 'bold' }}> {userData.name}</Text>)}
                </Text>

            </View>

            <View style={styles.recette}>

                <View style={styles.gauche}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>0.00XAF</Text>
                    <View style={{ width: '100%', flexDirection: 'row', marginTop: '13%' }}>
                        <Text style={{ width: '75%', marginLeft: '13%', fontSize: 12 }}>RECETTE</Text>
                        <Image
                            source={require('@/assets/images/money.png')}
                        />
                    </View>
                </View>

                <View style={styles.droite}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>0.00XAF</Text>
                    <View style={{ width: '100%', flexDirection: 'row', marginTop: '13%' }}>
                        <Text style={{ width: '75%', marginLeft: '13%', fontSize: 12 }}>A VERSER</Text>
                        <Image
                            source={require('@/assets/images/money.png')}
                        />
                    </View>
                </View>
            </View>

            {loading ? (
                <Text style={{ textAlign: 'center', marginTop: '50%', fontSize: 20 }}>Chargement des commandes...</Text>
            ) : (
                commandes.length === 0 ? (
                    <Text style={{ textAlign: 'center', marginTop: '50%', fontSize: 20 }}>Aucune commande pour l'instant!</Text>
                ) : (
                    <FlatList
                        style={{ marginTop: '4%' }}
                        data={commandes}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.commande}>
                                    <View style={styles.client}>
                                        <View style={{ width: '20%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                source={require('@/assets/images/profit.jpg')}
                                                style={{ width: '75%', height: '78%', borderRadius: 30, }}
                                            />
                                        </View>
                                        <Text style={{ fontWeight: 'bold', width: '77%', fontSize: 17, marginLeft: '3%', color: 'black' }}>{item.nameClient}</Text>
                                    </View>

                                    <View style={styles.locations}>
                                        <View style={styles.depart}>
                                            <Entypo
                                                name='location-pin'
                                                size={22}
                                                style={{ marginLeft: '2%' }}
                                            />
                                            <Text>{item.departAddress || 'Adresse non disponible'}</Text>
                                        </View>

                                        <View style={styles.space}>
                                            <View style={styles.trait}></View>
                                            <View style={styles.trait}></View>
                                        </View>

                                        <View style={styles.arrivée}>
                                            <Entypo
                                                name='location-pin'
                                                size={22}
                                                color='#088A4B'
                                                style={{ marginLeft: '2%' }}
                                            />
                                            <Text>{item.arriveeAddress || 'Adresse non disponible'}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.footer}>
                                        <View style={styles.money}>
                                            <Image source={require('@/assets/images/money.png')} />
                                            <Text style={{ width: '75%', marginLeft: '13%' }}>{item.prix}</Text>
                                        </View>
                                        <View style={{ width: '25%', flexDirection: 'row', marginLeft: '5%', alignItems: 'center' }}>
                                            <FontAwesome name='car' />
                                            <Text style={{ width: '75%', marginLeft: '13%' }}>{Math.round(item.distance)}m</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate("Client")} style={styles.accepter}>
                                            <Text>accepter</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 100, }}
                    />
                )
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa',
        marginTop: '10%'
    },
    header: {
        width: '85%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    statut: {
        width: '38%',
        height: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        marginLeft: '22%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    point: {
        width: '10%',
        height: '30%',
        borderRadius: 100,
        backgroundColor: '#088A4B'
    },
    recette: {
        marginTop: '5%',
        width: '85%',
        height: '10%',
        //padding:'5%',
        flexDirection: 'row',
        alignSelf: 'center',
        //backgroundColor:'blue',
    },
    picker: {
        width: '55%',
        height: 140,
        position: 'absolute',
        marginLeft: '40%',
        //backgroundColor:'#088A4B'
    },
    gauche: {
        width: '48%',
        height: '100%',
        borderRadius: 10,
        padding: '3%',
        alignItems: 'center',
        backgroundColor: '#0BBB66'
    },
    droite: {
        width: '48%',
        padding: '3%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0BBB66',
        marginLeft: '4%',
    },
    commande: {
        width: '86%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: '#65F1AD',
        marginTop: 20,
        padding: '3%',
        shadowOpacity: 4,
        shadowColor: '#eee'
    },
    client: {
        width: '80%',
        height: '28%',
        marginLeft: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'yellow',
    },
    locations: {
        width: '95%',
        height: '50%',
        alignSelf: 'center',
        //marginTop: '2%',
        padding: '1%',
        //backgroundColor:'blue',
    },
    depart: {
        width: '100%',
        height: '37%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'white'

    },
    space: {
        width: '100%',
        height: '27%',
        alignSelf: 'center',
    },
    trait: {
        marginLeft: '5%',
        width: '1%',
        marginTop: '1.5%',
        height: '25%',
        backgroundColor: 'black',

    },
    arrivée: {
        width: '100%',
        height: '37%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        //  backgroundColor:'grey'
    },
    footer: {
        width: '100%',
        height: '25%',
        //padding: '1%',
        flexDirection: 'row',
        // backgroundColor: 'grey',
        // marginTop: '1%',
        alignItems: 'center'
    },
    money: {
        width: '25%',
        flexDirection: 'row',
        marginLeft: '6.5%',
        alignItems: 'center'
    },
    accepter: {
        width: '30%',
        marginLeft: '7%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowOpacity: 1,
        shadowColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default HomeChauffeur;