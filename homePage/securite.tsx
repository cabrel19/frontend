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
        <Text style={{fontSize: 18}}>Service client</Text>
        <Feather name="phone-call" size={24} color="#088A4B" style={{ marginLeft: '56%' }}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openMessenger}>
        <Text style={{fontSize: 18}}>Situation d'urgence</Text>
        <FontAwesome5 name="facebook-messenger" size={24} color="#088A4B"style={{ marginLeft: '42%' }}/>
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

});

export default Securite;
