

import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
//import mapStyle from '@/mapStyle.json'; 

const Map = () => {

    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    const coordinates = [
        { latitude: 4.0621, longitude: 9.7369 },
        { latitude: 4.100, longitude: 9.432},
    ];

    return (

        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={regionInitiale}
                showsMyLocationButton
            >
                <Marker
                    coordinate={coordinates[0]}
                    title={"Ma position >"}
                    description={"Départ"}
                    pinColor={"#088A4B"}
                />

                <Marker
                coordinate={coordinates[1]}
                title={"Arrivée"}
                //pinColor={"#088A4B"}
                image={require('@/assets/images/eco.png')}
                style={{width:30, height:35}}
                />

                <Polyline
                coordinates={coordinates}
                strokeWidth={4}
                strokeColor='#088A4B'
                />

            </MapView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Map;