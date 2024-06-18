import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet, Alert, Button } from "react-native";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import Back from "@/components/btnBack";

const Securite = ({ navigation }: any) => {
    const openMessenger =  async () => {
        const appUrl = 'fb-messenger://';
        const webUrl = 'https://www.messenger.com/';
         
        try {
            // Verifier si messenger est installer
            const supported = await Linking.canOpenURL(appUrl);
            if (supported) {
                //ouvrir l'application messenger
                await Linking.openURL(appUrl);
            } else {
                //au cas ou messenger n'est pas installer, l'ouvrir sur le site
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            Alert.alert('Error','An error occured while trying to open Messenger.')
        }
    }

    const makePhoneCall = async (phoneNumber: string) => {
        const url = `tel:${phoneNumber}`;

        try{
            const supported = await Linking.canOpenURL(url);
            if (supported){ await Linking.openURL(url)}
            else {
                Alert.alert('Error','you dont have annk');
            }
        }catch (error) {
            Alert.alert('Error','An error occured while trying to open Messenger.')
            
        }
        }
    
     


  return (
    <View style={styles.container}>
<Back/>
      <View>
      <Image
            source={require("@/assets/images/7.png")}
            style={{ width: '100%', height: 300, marginTop: 20 }}
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => makePhoneCall('+237680322395')}>
        <Text style={styles.placeholder}>Service client</Text>
        <Feather name="phone-call" size={24} color="#088A4B" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openMessenger}>
        <Text style={styles.placeholder}>Situation d'urgence</Text>
        <FontAwesome5 name="facebook-messenger" size={24} color="#088A4B" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert("")}
          style={{alignSelf:'center', marginTop:135, backgroundColor: "#088A4B", padding: 15, borderRadius: 10, height: 47, 
          width: 140}}>
        <Text style={{ color: "white", textAlign: "center" }}>QUITTER</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

   

  button: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 10,
    borderColor: "#088A4B",
    borderWidth: 1,
    height: 60,
    width: "90%",
    flexDirection: "row",
  },

  placeholder: {
    color: "rgba(0, 0, 0, 1)",
    width: "88%",
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default Securite;
