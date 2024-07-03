import React, { useState, useEffect,useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Trajectoire = () => {

    const [isBlack, setIsBlack] = useState(true);

    const [origin, setorigin] = useState({
        latitude: 4.094354,
        longitude: 9.7393663,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIsBlack(previousState => !previousState);
        }, 1000); 
        return () => clearInterval(intervalId);
      }, []);

    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const getLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                alert("Permission refusée");
                return;
            }

            const updateLocation = async () => {
                let location = await Location.getCurrentPositionAsync({});
                const current = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                setorigin(current);
            };

            updateLocation();
            intervalId = setInterval(updateLocation, 3000);
        };

        getLocationPermission();

        return () => clearInterval(intervalId);
    }, []);

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
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
            <MapView
            ref={mapRef}
                style={styles.map}
                initialRegion={regionInitiale}
                showsMyLocationButton
            >
                <Marker
                    coordinate={origin}
                    title={"Ma position >"}
                    description={"Départ"}
                    pinColor={"#088A4B"}
                    draggable
                    onDragEnd={(direction) => setorigin(direction.nativeEvent.coordinate)}
                />

                <MapViewDirections
                    apikey={process.env.GOOGLE_MAPS_KEY ?? ""}
                    origin={origin}
                    strokeWidth={4}
                    strokeColor="#088A4B"
                />
            </MapView>

            <TouchableOpacity style={[styles.button, { backgroundColor: isBlack ? '#65F1AD' : 'white' }]} onPress={recenterMap}>
                <FontAwesome5 name="search-location" color="#088A4B" size={24} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    button: {
        position: 'absolute',
        bottom: '84%',
        alignSelf: 'flex-end',
        right: '3%',
        width: '13%',
        height: '6%',
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
    },
});

export default Trajectoire;
