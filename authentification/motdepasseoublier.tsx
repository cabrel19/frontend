import React from "react";
import {View, Image, TextInput, Text, Pressable, Button, StyleSheet} from 'react-native'


const Password = () =>{

    return(
        <View>
        <Image source={require("@/assets/images/password 1.png")}/>
        <Text>Veuillez Entrer votre Numero de Telephone</Text>
        {'\n'}
        <TextInput placeholder="Numero de telephone" keyboardType="numeric"/>
        {'\n'}
        {'\n'}
        <Pressable>
            <Button style = {styles.bouton} title = "Envoyer le code"/>
            </Pressable> 

        </View>
    );
}
const styles = StyleSheet.create({
text:{
    width:"80%",
    height:40,
    borderRadius:20,
    borderColor:'088A4B',
},
container:{
    flex:1,
    flexDirection:"column",
},
bouton:{
    borderRadius:20,
    backgroundColor:'#088A4B',
}
})


export default Password;