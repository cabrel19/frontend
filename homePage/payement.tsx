import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome6 } from '@expo/vector-icons';



const Payement = ({ navigation }: any) => {
  const regionInitiale = {
    latitude: 4.0651,
    longitude: 9.7584,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const coordinates = [{ latitude: 4.0621, longitude: 9.7369 }];


  return(

    <View style={styles.container}>
      <MapView
        initialRegion={regionInitiale}
        style={StyleSheet.absoluteFillObject}
      >
        <Marker
          coordinate={coordinates[0]}
          title={"Ma position >"}
          description={"Départ"}
          pinColor={"green"}
        />
      </MapView>

      <View style={styles.overlay}>
        <View style={styles.barre}></View>
      <View style={styles.mode}>
        <Text style={{fontWeight: '500', fontSize: '18%', height: "40%"}}>Mode de paiement</Text>
      </View>
       
      <View style={styles.mobile}>
      <Image
            source={require("@/assets/images/OM-removebg-preview.png")}
            style={{ width: '9%', height: 25, marginTop: 0 }}
          />
        <Text style={{fontSize: '16%'}}>Orange Money</Text>
      </View>
      <View style={styles.barre2}></View>
      <View style={styles.mobile}>
      <Image
            source={require("@/assets/images/momo.png")}
            style={{ width: '10%', height: 30, marginTop: 0 }}
          />
        <Text style={{fontSize: '16%'}}>Mobile Money</Text>
      </View>
      <View style={styles.barre2}></View>
      <View style={styles.mobile2}>
      <FontAwesome6 name="money-bills" size={19} color="#088A4B"  style={{marginLeft: '2%'}}/>
        <Text style={{fontSize: '16%', marginLeft: '3%'}}>Especes</Text>
      </View>
      <TouchableOpacity
            style={styles.payer}
            onPress={() => navigation.navigate("")}
          >
            <View style={{flexDirection:"row"}}>
            <Text style={{color:"white",width:"55%"}}>Terminer</Text>
        
            </View> 
          </TouchableOpacity>
      </View> 



</View>
  );
}
const styles = StyleSheet.create({

  container: { 
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "35%",
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: "1%",
  },
  mode: {
   width: '100%',
   height: '18%',
   justifyContent: "center",
   alignItems: "center",
   marginBottom: '5%',
   
  },

  barre: {
    width: "15%",
    height: 2,
    backgroundColor: "#088A4B",
    alignSelf: "center",
  },
 
  barre2: {
    width: "80%",
    height: "1%",
    backgroundColor: "#E0E0E0",
    marginBottom: "4%",
   
  },

  mobile: {
     width: '100%',
     height:'15%',
     marginLeft: '9%',
     flexDirection: "row"  
     
  },
mobile2:{
  width: '100%',
  height:'15%',
  marginLeft: '9%',
  flexDirection: "row"  
},
  payer: {
    width: "30%",
    backgroundColor: "#088A4B",
    borderRadius: 7,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    
  },

})
export default Payement;