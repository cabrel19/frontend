import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { doc, setDoc } from 'firebase/firestore';
import { app,firestore } from '@/firebase.config';

const LocationScreen: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      const locationSubscription = Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 10000, distanceInterval: 10 },
        (newLocation) => {
          setLocation(newLocation);
          saveLocationToFirebase(newLocation);
        }
      );

      return () => {
        locationSubscription.then((sub) => sub.remove());
      };
    }
  }, [location]);

  const saveLocationToFirebase = async (location: Location.LocationObject) => {
    try {
      const docRef = doc(firestore, 'locations', 'userLocation'); // Replace 'userLocation' with dynamic user ID in real app
      await setDoc(docRef, {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const regionInitiale = {
    latitude: 4.0651,
    longitude: 9.7584,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
};

  return (
    <View style={styles.container}>
      {/* <Text>{text}</Text> */}
      {location && (
        <MapView
          style={styles.map}
          initialRegion={regionInitiale}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Your Location"}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default LocationScreen;