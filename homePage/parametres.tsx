import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Text } from "react-native";
import Back from "@/components/btnBack";

const Parametre = ({ navigation }: any) => {

    return (

        <View style={styles.container}>

            <Back/>

            <TouchableOpacity style={styles.langue} onPress={() => navigation.navigate("Langue")} >
                <Ionicons name="language" size={24} color="#088A4B" style={{ width: '10%' }} />
                <Text style={{ fontSize: 18 }}>Langue</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '65%' }}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.langue}>
                <MaterialIcons name="update" size={24} color="#088A4B" style={{ width: '10%' }}/>
                <Text style={{ fontSize: 18 }}>Mise a jour</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="#088A4B" style={{ marginLeft: '56%' }} />
            </TouchableOpacity>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '38%',
        marginTop: '2%',
        backgroundColor:'#fafafa',
    },
    langue:{ 
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

export default Parametre;