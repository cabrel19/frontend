import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewBase, Alert } from 'react-native';
import Back from "@/components/btnBack";



const Information = ({ navigation }: any) => {


    return (

        <View style={styles.container} >

            <View style={styles.header}>
                <Back />
                <Text style={styles.title}>Informations</Text>
            </View>


            <TouchableOpacity style={styles.tarifs} onPress={() => Alert.alert("")}>
                <Text style={{ fontSize: 18 }}>Nos tarifs</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '70%' }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tarifs} onPress={() => Alert.alert("")}>
                <Text style={{ fontSize: 18 }}>Nos partenaires</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '54%' }} />
            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor:'#fafafafa'
    },

    header: {
        width: '100%',
        height: '15%',
        padding: '2%',
        backgroundColor: '#088A4B',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        marginLeft: '15%',
        marginBottom: '2%',
        fontSize: 20,
    },
    tarifs: {
        marginTop: '5%',
        alignSelf: 'center',
        alignItems:'center',
        height: '8%',
        width: "90%",
        backgroundColor: 'white',
        borderRadius:10,
        shadowOpacity:2,
        shadowColor:'#eee',
        flexDirection:'row',
        padding:'3%',
    },
})


export default Information;