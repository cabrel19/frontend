import React from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useNavigation } from "@react-navigation/native";

const Client = () => {

    const navigation = useNavigation();

    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    const coordinates = [
        { latitude: 4.0621, longitude: 9.7369 },
    ];

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
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={regionInitiale}
                style={StyleSheet.absoluteFillObject} >
                <Marker
                    coordinate={coordinates[0]}
                    title={"Ma position >"}
                    description={"Départ"}
                    pinColor={"green"}
                />
            </MapView>


            <View style={styles.overlay}>
                
                <View style={styles.barre}></View>
                <Text style={{ marginTop: '2%' }}>ARRIVE DANS<Text style={{ color: "#088A4B" }}>~5MIN</Text></Text>
                <View style={styles.profil}>
                    <Image source={require('@/assets/images/profil.jpeg')} style={styles.image} />
                </View>
                <Text style={styles.name}>TOTO DUCOBU</Text>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={() => makePhoneCall('+237696981536')} style={styles.zoneAppel}>
                    <View style={styles.iconCall}>
                        <Feather name="phone-call" size={24} color="black" />
                    </View>
                    <Text style={styles.contacter}>Contacter le client</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.depart}>
                        <Text>DEPART</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.annuler}  onPress={() => navigation.goBack()}>
                        <Text>ANNULER</Text>
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
       marginLeft:'3%', 
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