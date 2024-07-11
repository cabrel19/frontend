import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useNavigation } from "@react-navigation/native";
import { getAuth } from 'firebase/auth';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

const Client = ({ navigation, route }: any) => {

    const { commandeId, nameClient, phoneClient, lieu_depart } = route.params;

    const [chauffeurPosition, setChauffeurPosition] = useState<Location.LocationObject | null>(null);
    const [arrivalPosition, setArrivalPosition] = useState<Location.LocationObject | null>(null);
    const mapRef = useRef<MapView>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        console.log("addressClient", lieu_depart)
    },[]);

    useEffect(() => {
        (async () => {
            let location = await Location.getCurrentPositionAsync({});
            setChauffeurPosition(location);
        })();
    }, []);

    useEffect(() => {
        if (chauffeurPosition) {
           const locationSubscription = Location.watchPositionAsync(
            { accuracy: Location.Accuracy.High, timeInterval: 10000, distanceInterval: 10 },
            (newLocation) => {
                setChauffeurPosition(newLocation);
                saveLocationToFirebase(commandeId,newLocation);
            }
        );

        return () => {
            locationSubscription.then((sub) => sub.remove());
          };
        }
      }, [chauffeurPosition]);
    const saveLocationToFirebase = async (commandeId: string,location: Location.LocationObject) => {
        try {
            const user = getAuth().currentUser;
            if (user) {
                const orderDoc = await getDoc(doc(firestore, "commandes", commandeId));
                if (orderDoc.exists()) {
                    const order = orderDoc.data();
                    const commandeDocRef = doc(firestore, "commandes", commandeId);
                    
                }
            } else {
                Alert.alert("Erreur", "aucune commande trouvee.");
            }
        } catch ({ error }: any) {
            Alert.alert("Erreur", "Erreur lors de la sélection de la commande: " + error.message);
        }

    };


    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };



    const makePhoneCall = async (phoneNumber: string) => {
        const url = `tel:${phoneNumber}`;

        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) { await Linking.openURL(url) }
            else {
                Alert.alert('Error', 'you dont have annk');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occured while trying to open Messenger.')

        }
    };

    const deleteCommande = async () => {
        setLoading(true);
        try {

            const user = getAuth().currentUser;
            if (user) {
                await deleteDoc(doc(firestore, 'commandes', commandeId));
                navigation.navigate('HomeChauffeur');
            } else {
                Alert.alert('Erreur', 'Une erreur est survenue lors de l\'annulation de la commande.');
            }
        } catch (error: any) {
            Alert.alert('Erreur', `Une erreur est survenue lors de l\'annulation de la commande.,${error.message}`);
        } finally {
            setLoading(false);
        }
    };
     

    return (
        <View style={styles.container}>
            
                <MapView ref={mapRef} initialRegion={regionInitiale} style={StyleSheet.absoluteFillObject} >
                    <Marker
                        coordinate={lieu_depart}
                        title="Position du client"
                        pinColor="green"
                    />
                    { chauffeurPosition && (
                    <Marker
                        coordinate={{
                            latitude: chauffeurPosition.coords.latitude,
                            longitude: chauffeurPosition.coords.longitude,
                        }}
                        title="Position du chauffeur"
                        pinColor="red"
                    />
                    )}
                    
                        <Marker
                          coordinate={{
                            latitude:lieu_depart.latitude,
                            longitude:lieu_depart.longitude
                          }}
                          title="Point d'arrivee"
                          pinColor="green"
                    />
                    
                    {chauffeurPosition && (
                    
                         <MapViewDirections
                         origin={{
                            latitude: chauffeurPosition.coords.latitude,
                            longitude: chauffeurPosition.coords.longitude,
                        }}
                         destination={{
                            latitude:lieu_depart.latitude,
                            longitude:lieu_depart.longitude,
                         }}
                         apikey={"AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k"}
                         strokeWidth={4}
                         strokeColor="blue"
                     />
                    )}
                </MapView>
            

            <View style={styles.overlay}>

                <View style={styles.barre}></View>
                <Text style={{ marginTop: '2%' }}>ARRIVE DANS<Text style={{ color: "#088A4B" }}>~5MIN</Text></Text>
                <View style={styles.profil}>
                    <Image source={require('@/assets/images/10.png')} style={styles.image} />
                </View>
                <Text style={styles.name}>{nameClient}</Text>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={() => makePhoneCall(phoneClient)} style={styles.zoneAppel}>
                    <View style={styles.iconCall}>
                        <Feather name="phone-call" size={24} color="black" />
                    </View>
                    <Text style={styles.contacter}>Contacter le client</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.depart} onPress={() => navigation.navigate("trajectoireCourse")}>
                        <Text>DEPART</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.annuler} onPress={deleteCommande}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#088A4B" />
                        ) : (
                            <Text>ANNULER</Text>
                        )}
                    </TouchableOpacity>

                </View>

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
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: '1%',
    },
    barre: {
        width: "15%",
        height: 2,
        backgroundColor: '#088A4B',
        alignSelf: 'center',
    },
    profil: {
        alignSelf: 'center',
        marginTop: '3%',
        width: '25%',
        height: '30%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 100
    },
    name: {
        marginTop: '3%',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333'
    },
    vehicule: {
        flexDirection: 'row',
        width: '70%',
        height: '5%',
        alignSelf: 'center',
        marginTop: '4%'
    },
    line: {
        marginTop: '4%',
        width: '70%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'black'
    },
    zoneAppel: {
        flexDirection: 'row',
        width: '60%',
        height: '17%',
        //alignSelf: 'center',
        //  marginLeft:'1%',
        //backgroundColor:'blue',
        alignItems: 'center',
        marginTop: '4%'
    },
    iconCall: {
        height: '78%',
        width: '20%',
        justifyContent: 'center',
        borderRadius: 100,
        //marginLeft:'3%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#088A4B',
        //alignSelf: 'center',
        alignItems: 'center'
    },
    contacter: {
        fontSize: 17,
        // textAlign: 'center',
        marginLeft: '3%',
        width: '70%'
    },
    footer: {
        width: '85%',
        marginTop: '6%',
        // backgroundColor: 'blue',
        // borderRadius: 7,
        alignItems: 'center',
        // justifyContent: 'center',
        height: '13%',
        alignSelf: 'center',
        flexDirection: 'row',

    },
    depart: {
        width: '30%',
        marginLeft: '9%',
        backgroundColor: '#088A4B',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        alignSelf: 'center'
    },
    annuler: {
        width: '30%',
        marginLeft: '20%',
        backgroundColor: '#088A4B',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        alignSelf: 'center'
    },
});

export default Client;