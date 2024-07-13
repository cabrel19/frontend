import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { deleteDoc, doc, GeoPoint, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import { ActivityIndicator } from 'react-native';
import { getAuth } from 'firebase/auth';
import MapViewDirections from 'react-native-maps-directions';


interface commande {
    nameDriver: string;
    phoneDriver: string;
    locationCustomer: GeoPoint;
    locationDriverLongitude: number;
    locationDriverLatitude: number;
}
const Chauffeur = ({ navigation, route }: any) => {
  const { commandeId } = route.params;

    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    const [loading, setLoading] = useState(false);
    const [infoCommande, setInfoCommande] = useState<commande | null>(null);
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        const fetchCommandeData = async () => {
            try {
                const commandeDoc = await getDoc(doc(firestore, 'commandes', commandeId));
                if (commandeDoc.exists()) {
                    const commandeData = commandeDoc.data();
                    setInfoCommande({
                        nameDriver: commandeData.chauffeur.name,
                        phoneDriver: commandeData.chauffeur.phone,
                        locationCustomer: commandeData.lieu_depart,
                        locationDriverLatitude: commandeData.chauffeur.location.latitude,
                        locationDriverLongitude: commandeData.chauffeur.location.longitude,
                    })

                } else {
                    Alert.alert("Erreur", "Commande non trouvée.");
                }
            } catch (error: any) {
                Alert.alert("Erreur", "Erreur lors de la récupération des données de la commande: " + error.message);
            }
        };

        fetchCommandeData();
    }, [commandeId]);

    const deleteCommande = async () => {
        setLoading(true);
        try {

            const user = getAuth().currentUser;
            if (user) {
                await deleteDoc(doc(firestore, 'commandes', commandeId));
                navigation.navigate('Home');
            } else {
                Alert.alert('Erreur', 'Une erreur est survenue lors de l\'annulation de la commande.');
            }
        } catch (error: any) {
            Alert.alert('Erreur', `Une erreur est survenue lors de l\'annulation de la commande.,${error.message}`);
        } finally {
            setLoading(false);
        }
    };

  const makePhoneCall = async (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "you dont have annk");
      }
    } catch (error) {
      Alert.alert("Error", "An error occured while trying to open Messenger.");
    }
  };

  return (
    <View style={styles.container}>
       <MapView
                initialRegion={regionInitiale}
                showsUserLocation={true}
                style={StyleSheet.absoluteFillObject}
                ref={mapRef}
            >

                <Marker
                    coordinate={infoCommande?.locationCustomer as GeoPoint}
                    title="Ma position"
                    pinColor="green"
                />
                <Marker
                    coordinate={{
                        latitude: infoCommande?.locationDriverLatitude as number,
                        longitude: infoCommande?.locationDriverLongitude as number,
                    }}
                    title="Position du chauffeur"
                    pinColor="red"
                />
                <MapViewDirections
                    origin={infoCommande?.locationCustomer as GeoPoint}
                    destination={{
                        latitude: infoCommande?.locationDriverLatitude as number,
                        longitude: infoCommande?.locationDriverLongitude as number,
                    }}
                    apikey={"AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k"}
                    strokeWidth={4}
                    strokeColor="#088A4B"
                />

            </MapView>

     <View style={styles.overlay}>
                <View style={styles.barre}></View>
                <Text style={{ marginTop: '2%' }}>ARRIVE DANS<Text style={{ color: "#088A4B" }}>~5MIN</Text></Text>
                <View style={styles.profil}>
                    <Image source={require('@/assets/images/10.png')} style={styles.image} />
                </View>
                <Text style={styles.name}>{infoCommande?.nameDriver}</Text>
                <View style={styles.line}></View>
                <Text style={styles.name}>VEHICULE</Text>
                <View style={styles.vehicule}>
                    <Text style={{ fontSize: 15, width: '70%' }}>Toyota Yaris Rose</Text>
                    <Text style={{ fontSize: 15 }}>357148</Text>
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={() => makePhoneCall(infoCommande?.phoneDriver as string)} style={styles.zoneAppel}>
                    <View style={styles.iconCall}>
                        <Feather name="phone-call" size={24} color="black" />
                    </View>
                    <Text style={styles.contacter}>Contacter le conducteur</Text>
                </TouchableOpacity>

        <View style={styles.footer}>
            
          <TouchableOpacity
            style={styles.payer}
            onPress={() => navigation.navigate("Payement")}
          >
            <View style={{flexDirection:"row"}}>
            <Text style={{color:"white",width:"55%"}}>PAYER</Text>
            <FontAwesome6 name="money-bill-transfer" size={18} color="white" />
            </View> 
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.annuler} onPress={deleteCommande}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={{color:"white"}}>ANNULER</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    marginTop: "2%",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "55%",
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: "1%",
  },
  barre: {
    width: "15%",
    height: 2,
    backgroundColor: "#088A4B",
    alignSelf: "center",
  },
  profil: {
    alignSelf: "center",
    marginTop: "3%",
    width: "28%",
    height: "23%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 100,
  },
  name: {
    marginTop: "3%",
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
  },
  vehicule: {
    flexDirection: "row",
    width: "70%",
    height: "5%",
    alignSelf: "center",
    marginTop: "4%",
  },
  line: {
    marginTop: "4%",
    width: "70%",
    alignSelf: "center",
    height: 1,
    backgroundColor: "black",
  },
  zoneAppel: {
    flexDirection: "row",
    width: "70%",
    height: "13%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "4%",
  },
  iconCall: {
    height: "88%",
    width: "20%",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#088A4B",
    alignSelf: "center",
    alignItems: "center",
  },
  contacter: {
    fontSize: 17,
    textAlign: "center",
    width: "80%",
  },
  footer: {
    width: "100%",
    marginTop: "6%",
    flexDirection: "row",
    alignItems: "center",
    height: "12%",
    
  },
  annuler: {
    width: "30%",
    backgroundColor: "#088A4B",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    alignSelf: "center",
    marginLeft: '20%'
    
  },
  payer: {
    width: "30%",
    backgroundColor: "#088A4B",
    borderRadius: 7,
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%"
  },
});

export default Chauffeur;
