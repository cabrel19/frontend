import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackHome from '@/components/backHome';
import { AntDesign } from '@expo/vector-icons';



const Commander = ({ navigation }: any) => {

    const [selectionner, setSelectionner] = useState(null);

    const handlePress = (id) => {
        setSelectionner(id);
    };

    const space = () => {
        return <View style={styles.space} />;
    };

    const data = [
        {
            id: "1",
            image: require('@/assets/images/moto.png'),
            titre: 'moto',
            prix: 300,
        },
        {
            id: "2",
            image: require('@/assets/images/eco.png'),
            titre: 'eco',
            prix: 600,
        },
        {
            id: "3",
            image: require('@/assets/images/confort.png'),
            titre: 'confort',
            prix: 1400,
        },
        {
            id: "4",
            image: require('@/assets/images/rapide.png'),
            titre: 'rapide',
            prix: 2000,
        }

    ];
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
                    data={data}
                    renderItem={({ item }) => {
                        const select = item.id === selectionner;
                        return (
                            <View style={styles.flatlist}>
                                <TouchableOpacity
                                    style={[styles.choice, select && styles.selectionner]}
                                    onPress={() => handlePress(item.id)}
                                >
                                    <Image source={item.image}
                                        style={{ height: '100%', width: '27%' }}
                                    />

                                    <View style={styles.confortMoto}>
                                        <Text style={styles.textEco}>{item.titre}</Text>
                                        <Text style={styles.textPrix}> prix: {item.prix}</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    extraData={selectionner}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={space}
                />


                <TouchableOpacity style={styles.promo} onPress={() => navigation.navigate("Offres")}>
                    <Image source={require('@/assets/images/promo.png')} style={{ height: '55%', width: '7%' }} />

                    <View style={styles.text}>
                        <Text style={styles.textPromo}> Obtenez 50% de reduction lors de votre prochain trajet </Text>
                        <AntDesign name="right" size={20} color="#088A4B" style={{ marginLeft: '6%' }} />
                    </View>
                </TouchableOpacity>

                <View style={styles.lines}></View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Chauffeur')}
                    style={[styles.commander, selectionner && styles.bouton]}
                    disabled={!selectionner}
                >
                    <Text style={styles.textCommande}> COMMANDER </Text>
                </TouchableOpacity>

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
        height: '44%',
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
    selectionner: {
        borderColor: 'green',
        borderWidth: 2
    },
    choice: {
        width: '100%',
        height: '100%',
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
    confortMoto: {
        width: '60%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'stretch',
        marginLeft: '15%'
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
        marginLeft: '4%',
    },
    textPromo: {
        alignItems: 'center',
    },
    lines: {
        width: '75%',
        height: 1,
        backgroundColor: '#dddddd'
    },
    commander: {
        width: '40%',
        height: '14%',
        marginTop: '3%',
        backgroundColor: '#BBBBBB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bouton: {
        backgroundColor: '#088A4B'
    },
    textCommande: {
        fontSize: 17,
        color: '#FFFFFF'
    },

});

export default Commander;