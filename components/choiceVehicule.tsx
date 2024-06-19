import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Dimensions, Image,TouchableOpacity } from 'react-native';

const Vehicule = ({require,Title,prix}:any) => {

    

    return (

        <TouchableOpacity style={styles.choice}>
            <Image source={require} />

            <View style={styles.confort}>
                <Text style={styles.textEco}> {Title}</Text>
                <Text style={styles.textPrix}> {prix}</Text>
            </View>
        </TouchableOpacity>




    );
};

const styles = StyleSheet.create({
  
    choice: {
        width: '100%',
        height: '32%',
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
    
});

export default Vehicule;