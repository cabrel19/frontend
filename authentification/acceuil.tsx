import react from 'react';
import { ImageBackground, View, Button, Pressable, StyleSheet } from 'react-native';
import {Stack, router} from 'expo-router';


const Acceuil = () =>{
  return(
    <ImageBackground source={require("@/assets/images/taxi.png")}>
      <View style = {styles.container}>
            <Pressable onPress = {()=>
              router.push("")  
              }>
                <Button style = {styles.bouton} title="s'inscrire" color="088A4B" />
            </Pressable>
            <Pressable onPress = {()=>router.push("/seconnecter/numero1") }>
                <Button  style = {styles.bouton} title="se connecter" color="088A4B" />
            </Pressable>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:"column",
    marginBottom:20,
  },
  bouton:{
    borderRadius:20,
    borderBlockColor:'088A4B',
  }
})

export default Acceuil;
