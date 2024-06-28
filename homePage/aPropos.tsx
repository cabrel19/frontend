import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from '@/components/btnBack';
import { MaterialIcons } from '@expo/vector-icons';

const Apropos = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Back />
                <Text style={styles.title}>A propos</Text>
            </View>

            <TouchableOpacity style={styles.bouton}>
                <Text style={{ fontSize: 16 }}>Politique de confidentialité</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '39%' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bouton}>
                <Text style={{ fontSize: 16 }}>Contrat de licence</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '57%' }} />
            </TouchableOpacity>

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
        marginLeft: '17%',
        marginBottom: '2%',
        fontSize: 20,
    },
    bouton: {
        width: '93%',
        height: '8%',
        marginTop: '4%',
        padding: '3%',
        flexDirection: 'row',
        shadowOpacity:2,
        shadowColor:'#eee',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:'white',
        alignSelf: 'center',
    },
});

export default Apropos;