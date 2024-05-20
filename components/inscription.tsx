import { useState } from 'react';
import React from 'react';

import { Image, StyleSheet,Text,View,TextInput,Button, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.back}>
       <Button
         title="back"
         color="black"
       />
      </View>
      
      <Text style={styles.textHearder}> Champ d'inscription</Text>
      
      <Image
      source={require('@/assets/images/inscription.png')}
      />
      
      <TextInput placeholder='Entrez votre nom'style={styles.textInput}/>
      <TextInput placeholder='Entrez votre numero'style={styles.textInput}/>
      <TextInput placeholder='Creer un mot de passe'style={styles.textInput}/>
      <TextInput placeholder='Confirmer le mot de passe'style={styles.textInput}/>
      
      <View style={styles.next}>
       <Button
         title="SUIVANT"
         color="white"
       />        

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
 container:{
  height:200,
 },
 back:{
   alignItems:'flex-start',
 },
 textHearder:{
  textAlign:'center',
  fontSize:30,
  color:'green',
},
textInput:{
  borderWidth:3, 
  borderColor:'green',
  width:"80%",
  height:"25%", 
  fontSize:20,
  marginTop:10, 
  alignItems:'center', 

  borderRadius:'15',
},
next:{
  marginTop:30,
  backgroundColor:'green',
  color:'white',
  width:"50%",
  marginLeft:90,
  borderRadius:'10',
},
});
