import React from "react";
import { Image,Text,View, TouchableOpacity,StyleSheet, ImageBackground } from "react-native";
 
const authentification = ({navigation}) => {

 return (


    <ImageBackground
        source={require('@/assets/images/fond.png')}
        style={styles.image}>

        <TouchableOpacity style={styles.inscrire}  onPress={()=> navigation.navigate("Inscription")}>
           <Text style={{ color: '#fff', fontSize: 20 }}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.connecter}  onPress={()=> navigation.navigate("Connexion")}>
             <Text style={{ color: '#fff', fontSize: 20 }}>Se connecter</Text>
        </TouchableOpacity>

    </ImageBackground>   
 );


};

const styles = StyleSheet.create ({

    image:{
        flex:1,
        justifyContent: 'flex-end',
        resizeMode:'cover',
        width:'100%',
        height:'100%',
        alignSelf:'center',
    },

    inscrire:{
        backgroundColor: '#088A4B',
        opacity:93,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        width:200,
        height:50,
        alignSelf:'center',
      },

    connecter:{
        backgroundColor: '#088A4B',
        opacity:93,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        width:200,
        height:50,
        alignSelf:'center',
      },
});

export default authentification;