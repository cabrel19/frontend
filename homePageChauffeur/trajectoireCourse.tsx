import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { doc, GeoPoint, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase.config';
import MapViewDirections from 'react-native-maps-directions';

interface commande {
  locationCustomer: GeoPoint;
  locationDestination: GeoPoint;
  locationDriverLongitude: number;
  locationDriverLatitude: number;
}
const TrajectoireCourse = ({ navigation, route }: any) => {
  const { commandeId } = route.params;

  const mapRef = useRef<MapView>(null);
  const [infoCommande, setInfoCommande] = useState<commande | null>(null);

  const regionInitiale = {
    latitude: 4.0651,
    longitude: 9.7584,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    const fetchCommandeData = async () => {
      try {
        
        const commandeDoc = await getDoc(doc(firestore, 'commandes', commandeId));
        if (commandeDoc.exists()) {
          const commandeData = commandeDoc.data();
          setInfoCommande({
            locationCustomer: commandeData.lieu_depart,
            locationDriverLatitude: commandeData.chauffeur.location.latitude,
            locationDriverLongitude: commandeData.chauffeur.location.longitude,
            locationDestination: commandeData.lieu_arrivée,
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

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={regionInitiale}
        style={StyleSheet.absoluteFillObject}
      >

        <Marker
          coordinate={infoCommande?.locationCustomer as GeoPoint}
          title="Ma position"
          pinColor="green"
        />

        <Marker
          coordinate={infoCommande?.locationDestination as GeoPoint}
          title="Destination"
          pinColor="red"
        />

        <MapViewDirections
          origin={infoCommande?.locationCustomer as GeoPoint}
          destination={infoCommande?.locationDestination as GeoPoint}
          apikey={"AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k"}
          strokeWidth={4}
          strokeColor="#088A4B"
        />

      </MapView>

      <View style={styles.overlay}>
<TouchableOpacity style={styles.terminer}>
  <Text style={{ color: 'white', fontSize: 16 }}>Terminer</Text>
</TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: '1%',
  },
  terminer: {
    backgroundColor: '#088A4B',
    borderRadius: 10,
    marginTop: '35%',
    width: '30%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default TrajectoireCourse;