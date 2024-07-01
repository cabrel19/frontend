import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Animated, PanResponder, Alert } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Geolocation from '@react-native-community/geolocation';
import BarreRecherche from '@/components/BarreRecherche';
import BackHome from '@/components/backHome';
import LocationUser from '@/components/positionUser';
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

interface Destination {
    latitude: number;
    longitude: number;
}

const { height } = Dimensions.get('window');

const DestinationCourse = ({ navigation }: any) => {

    const [destination, setDestination] = useState<Destination | null>(null);
    const translateY = useRef(new Animated.Value(0)).current;
    const [origin, setorigin] = useState({ latitude: 4.094354, longitude: 9.7393663, });
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

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy > height * 0.4) {
                    Animated.timing(translateY, {
                        toValue: height * 0.8 - 125,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                } else {
                    Animated.timing(translateY, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    const handlePress = () => {
        Animated.timing(translateY, {
            toValue: height * 0.7 - 50,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleDestinationSelected = async (data: any, details: any) => {
        // console.log({ details });
        if (details && details.geometry && details.geometry.location) {
            const { lat, lng } = details.geometry.location;
            setDestination({ latitude: lat, longitude: lng });
            // console.log("first" , price)
            navigation.navigate('Commander', { destination: { latitude: lat, longitude: lng },  });

        } else {
            console.error("Invalid details object:", details);
            alert("Désolé, nous n'avons pas pu obtenir les coordonnées de cette destination.");
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

            <TouchableOpacity style={styles.buttons} onPress={recenterMap}>
                <FontAwesome5 name="search-location" color="#088A4B" size={24} />
            </TouchableOpacity>

            <Animated.View
                style={[styles.formulaire, { transform: [{ translateY }] }]}
                {...panResponder.panHandlers}
            >

                <View style={styles.line}></View>

                <BackHome />

                <Text style={styles.texte}>planifiez votre trajet</Text>

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Entypo
                        name='location'
                        size={24}
                        style={{ marginLeft: '3%', color: '#088A4B' }}
                    />
                    <Text style={styles.buttonText}>Ma localisation</Text>
                </TouchableOpacity>

                <View>

                    <BarreRecherche
                        onPress={handleDestinationSelected}
                    />
                </View>
            </Animated.View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    map: {
        width: "100%",
        height: "100%",
    },
    buttons: {
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
    formulaire: {
        position: 'absolute',
        bottom: 0,
        height: height * 0.8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: '2%',
    },
    line: {
        width: "20%",
        height: '1%',
        backgroundColor: '#088A4B',
        alignSelf: 'center',
        borderRadius: 10,
    },
    texte: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },

    button: {
        flexDirection: 'row',
        height: '7%',
        width: '95%',
        borderWidth: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '4%',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        marginLeft: '22%',
    },

    textInput: {
        width: '93%',
        height: '100%',
        fontSize: 20,
    },
});

export default DestinationCourse;