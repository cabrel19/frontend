import React, { useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Animated, Dimensions, PanResponder } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackHome from '@/components/backHome';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { BarreRecherche } from '@/components/BarreRecherche';


const { height } = Dimensions.get('window');

const DestinationLIV = () => {
    const translateY = useRef(new Animated.Value(0)).current;

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


            <Animated.View
                style={[styles.formulaire, { transform: [{ translateY }] }]}
                {...panResponder.panHandlers}
            >
                <View style={styles.line}></View>

                <BackHome />

                <Text style={styles.texte}>Destination de votre colis</Text>

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Entypo
                        name='location'
                        size={24}
                        style={{ marginLeft: '3%', color: '#088A4B' }}
                    />
                    <Text style={styles.buttonText}>Ma localisation</Text>
                </TouchableOpacity>

                <BarreRecherche/>
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
        height: 2,
        backgroundColor: '#088A4B',
        alignSelf: 'center',
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
    enterDest: {
        flexDirection: 'row',
        height: '7%',
        width: '95%',
        borderColor: '#088A4B',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '4%',
        paddingHorizontal: '2%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '93%',
        height: '100%',
        fontSize: 20,
    },
});

export default DestinationLIV;