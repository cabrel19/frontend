
import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
//import mapStyle from '@/mapStyle.json'; 
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from 'react-native-geolocation-service';

const Map = () => {




    const [destination, setdestination] = useState(
        {
            latitude: 4.100, 
            longitude: 9.432
        }
    )

    const [origin, setorigin] = useState(
        {
            latitude: 4.0621, 
            longitude: 9.7369  
        }
    )

    useEffect(()=>{
        console.log({apiKey: process.env.GOOGLE_MAPS_KEY

        });
        
        getLocationPermission();
    }, [])
    async function getLocationPermission() {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            alert("permission refuser");
            return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }
    setorigin(current);
}
    



    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };


    return (

        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={regionInitiale}
               // showsMyLocationButton
            >
                <Marker
                    //coordinate={coordinates[0]}
                    coordinate={origin}
                    title={"Ma position >"}
                    description={"Départ"}
                    pinColor={"#088A4B"}
                    draggable
                    onDragEnd={(direction)=>setorigin(direction.nativeEvent.coordinate)}
                />

                <Marker
                //coordinate={coordinates[1]}
                draggable
                coordinate={destination}
                title={"Arrivée"}
                //pinColor={"#088A4B"}
                image={require('@/assets/images/eco.png')}
                style={{width:30, height:35}}
                onDragEnd={(direction)=>setdestination(direction.nativeEvent.coordinate)}
                />
                
                <MapViewDirections
                apikey={process.env.GOOGLE_MAPS_KEY ?? ""}
                //apikey='AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k'
                origin={origin}
                destination={destination}
                strokeWidth={4}
                strokeColor='#088A4B'                
                />

                <Polyline
                coordinates={[origin, destination]}
                //coordinates={coordinates}
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