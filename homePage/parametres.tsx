import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Text } from "react-native";

const Parametre = ({ navigation }: any) => {

    return (

        <View style={styles.container}>

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '8%', alignSelf: 'center', width: '95%', height: '15%' }} onPress={() => navigation.navigate("Langue")} >
                <Ionicons name="language" size={22} color="#088A4B" style={{ width: '10%' }} />
                <Text style={{ fontSize: 16, width: '80%', }}>Langue</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" />
            </TouchableOpacity>

            <View style={styles.line} />

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '8%', alignSelf: 'center', width: '95%', height: '15%' }} onPress={() => Alert.alert("")}>
                <MaterialIcons name="update" size={22} color="#088A4B" style={{ width: '10%' }}/>
                <Text style={{ fontSize: 16, width:'80%', }}>Mise a jour</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" />
            </TouchableOpacity>


            <View style={styles.midle}></View>

            

            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '38%',
        marginTop: 10,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        width: "82%",
        marginTop: '3%',
        alignSelf: 'center',

    },

    midle: {
        height: '4%',
        backgroundColor: "rgb(180, 180, 180)",
        marginTop: 30,
    },


})

export default Parametre;