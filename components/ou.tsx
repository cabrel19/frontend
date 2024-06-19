import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ou = () => {
   
    return (

        <View style={styles.lineContainer}>

            <View style={styles.line}></View>
            <Text style={styles.text}>ou</Text>
            <View style={styles.line}></View>

        </View>

    );
};

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4%',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
        height: '5%',
        display: 'flex',

    },
    line: {
        width: "40%",
        height: 1,
        backgroundColor: '#088A4B',
    },
    text: {
        width: "18%",
        height: '100%',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default Ou;