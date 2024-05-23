import React from "react";
import { Image,Text,View, TouchableOpacity,StyleSheet, ImageBackground } from "react-native";
 
const authentification = ({navigation}) => {

 return (

    <View style={styles.container}>

        <ImageBackground
           source={require('@/assets/images/fond.png')}
           style={styles.image}
        />

        <TouchableOpacity style={styles.inscrire}  onPress={()=> navigation.navigate("Inscription")}>
           <Text style={{ color: '#fff', fontSize: 20 }}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.connecter}  onPress={()=> navigation.navigate("Connexion")}>
             <Text style={{ color: '#fff', fontSize: 20 }}>Se connecter</Text>
        </TouchableOpacity>

    </View>

 );


};

const styles = StyleSheet.create ({

    container:{
        flex:1,
        height:'100%',
    },

    image:{
        flex:1,
        width:'100%',
        height:'120%',
        resizeMode:'cover',
    },

    inscrire:{
        backgroundColor: '#088A4B',
        opacity:93,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        width:140,
        height:47,
        alignSelf:'center',
      },

    connecter:{
        backgroundColor: '#088A4B',
        opacity:93,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        width:140,
        height:47,
        alignSelf:'center',
      },
});

export default authentification;