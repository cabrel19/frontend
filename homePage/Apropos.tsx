
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {router} from 'expo-router';


const Apropos = () =>{
    return(
        <View style={styles.container }>
        <Image style={{marginTop:5}}source={require("@/assets/images/logo.png")} />
        <TouchableOpacity style = {styles.block1}>
          <Text style={{paddingLeft:10}}>Politique de confidentialité</Text>
        <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.block2}>
        <Text style={{paddingLeft:10}}>Contrat de licence</Text>
        <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>       
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
    },
    
    block1:{
  width:340,
  height:53,
  borderStyle:"solid",
  justifyContent:"space-between",
  flexDirection:"row",
  borderRadius:10,
  borderWidth:1,
  alignItems:"center",
  marginLeft:20,
  marginRight:20,
    },
    block2:{
      marginRight:20,
      marginLeft:20,
      width:340,
       height:53,
      borderStyle:"solid",
      justifyContent:"space-between",
      flexDirection:"row",
      borderRadius:10,
      borderWidth:1,
      marginTop:10,
      alignItems:"center",
    },
   
  })
    
export default Apropos; 
 