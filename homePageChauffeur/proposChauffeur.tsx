import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Back from '@/components/btnBack';

const ProposChauffeur = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Back />
                <Text style={styles.title}>A propos</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        height: '100%',
    },
    header: {
        width: '100%',
        height: '15%',
        padding: '2%',
        backgroundColor: '#088A4B',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // marginTop:'10%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        marginLeft: '20%',
        marginBottom: '2%',
        fontSize: 20,
    },
});

export default ProposChauffeur;