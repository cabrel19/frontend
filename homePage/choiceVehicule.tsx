import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackHome from '@/components/backHome';
import { AntDesign } from '@expo/vector-icons';



const Commander = () => {

    const data = useState('');
    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    const coordinates = [
        { latitude: 4.0621, longitude: 9.7369 },
    ];

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
                <View style={styles.line}></View>
                <BackHome />
                <Text style={{ fontSize: 20 }}>Options de prise en charge</Text>

                <FlatList
                    style={{ height: '10%' }}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.flatlist}>
                            <TouchableOpacity style={styles.choice}>
                                <Image source={require('@/assets/images/moto.png')} style={{ height: '100%', width: '33%' }} />

                                <View style={styles.confortMoto}>
                                    <Text style={styles.textEco}> moto </Text>
                                    <Text style={styles.textPrix}> prix:300f</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.choice}>
                                <Image source={require('@/assets/images/eco.png')} style={{ height: '100%', width: '40%' }} />

                                <View style={styles.confort}>
                                    <Text style={styles.textEco}> eco </Text>
                                    <Text style={styles.textPrix}> prix:600f</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.choice}>
                                <Image source={require('@/assets/images/confort.png')} style={{ height: '100%', width: '40%' }} />

                                <View style={styles.confort}>
                                    <Text style={styles.textEco}> confort </Text>
                                    <Text style={styles.textPrix}> prix:1400f</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.choice}>
                                <Image source={require('@/assets/images/rapide.png')} style={{ height: '100%', width: '40%' }} />

                                <View style={styles.confort}>
                                    <Text style={styles.textEco}> rapide </Text>
                                    <Text style={styles.textPrix}> prix:2000f</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )} />

                <TouchableOpacity style={styles.promo}>
                    <Image source={require('@/assets/images/promo.png')} style={{ height: '65%', width: '10%' }} />

                    <View style={styles.text}>
                        <Text style={styles.textPromo}> Obtenez 50% de reduction lors de votre prochain trajet </Text>
                        <AntDesign name="right" size={25} color="#088A4B" style={{ marginLeft: '2%' }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commander}>
                    <Text style={styles.textCommande}> COMMANDER </Text>
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
        height: '54%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: '1%',
    },
    line: {
        width: "20%",
        height: 2,
        backgroundColor: '#088A4B',
        alignSelf: 'center',
    },
    flatlist: {
        flex: 1,
        width: '94%',
        height: '50%',
        alignSelf: 'center',
        // backgroundColor: '#AEAEAE',
        // borderRadius: 10,
    },
    choice: {
        width: '100%',
        height: '22%',
        borderWidth: 1,
        marginTop: '3%',
        flexDirection: 'row',
        padding: '1%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    confort: {
        width: '60%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        marginLeft: '3%'
    },
    confortMoto:{
        width: '60%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        marginLeft: '10%'
    },
    textEco: {
        height: '50%',
        textAlign: 'center',
        fontSize: 17,
        color: '#088A4B'
    },
    textPrix: {
        height: '50%',
        textAlign: 'center',
        fontSize: 17
    },
    promo: {
        width: '90%',
        height: '14%',
        borderWidth: 1,
        marginTop: '3%',
        flexDirection: 'row',
        padding: '1%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    text: {
        width: '88%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '2%'

    },
    textPromo: {
        alignItems: 'center',
    },
    commander: {
        width: '40%',
        height: '14%',
        marginTop: '3%',
        backgroundColor: '#088A4B',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textCommande: {
        fontSize: 17,
        color: '#FFFFFF'
    },

});

export default Commander;