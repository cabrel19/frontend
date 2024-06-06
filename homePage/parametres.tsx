import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Text} from "react-native";

const Parametre = ({ navigation }: any) => {

    return (

        <View style={styles.container}>
            <View style={{
        marginTop: 10,
        marginLeft: 35,
        height: 30,
        width: "98%",
    }}>
          <TouchableOpacity  onPress={() => navigation.navigate("Langue")} >
           <Ionicons name="language" size={22} color="#088A4B" style={{ top: 19, right:10}} /> 
          <Text style={{fontSize: 16, marginLeft:26}}>Langue</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" style={{ top: -16,   left: 340}} />
          </TouchableOpacity>
          <View style={styles.line} />
          </View>
          <View style={{
       
        marginTop: 40,
        marginLeft: 35,
        height: 60,
        width: "98%",
    }}>
          <TouchableOpacity onPress={() =>Alert.alert("")}>
          <MaterialIcons name="update" size={22} color="#088A4B" style={{ top: 19, right:10}} />
          <Text style={{fontSize: 16, marginLeft:26}}>Mise a jour</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" style={{ top: -16,   left: 340}} />
          </TouchableOpacity>

          </View>
        <View style={styles.midle} >
</View>

        <View style={{
       
       marginTop: 40,
       marginLeft: 35,
       height: 60,
       width: "98%",
   }}>
    <TouchableOpacity onPress={() =>Alert.alert("")}>
          <MaterialCommunityIcons name="account-remove-outline" size={22} color="#b22222"  style={{ top: 19, right:10}} />
          <Text style={{fontSize: 16, marginLeft:26, color: '#b22222'}}>Supprimer le compte</Text>
          </TouchableOpacity>

        </View>

        <View style={{
       
      
       marginLeft: 35,
       height: 60,
       width: "98%",
   }}>
    <TouchableOpacity onPress={() =>Alert.alert("")}>
          <MaterialIcons name="logout" size={22}  color="#b22222"  style={{ top: 19, right:10}} />
          <Text style={{fontSize: 16, marginLeft:26, color: '#b22222'}}>Deconnexion</Text>
          </TouchableOpacity>
          </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: '38%',
        marginTop: 10,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        width: "82%",  
           
       },

    midle: {
     height: '4%',
     backgroundColor: "rgb(180, 180, 180)",
     marginTop: 30,
    },
   

})

export default Parametre;