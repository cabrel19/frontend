import react, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Trajet = () =>{

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text>Options de prise en charge</Text>

            </View>
            
            <View style={styles.block1}>
            <Image source={require('@/assets/images/voiture2.png')} style={styles.ima}/>
                <Text style={{paddingRight:50, paddingTop:10}}>eco,
                prix:600f</Text>
            </View>
            
            <View style={styles.block2}>
                <Image source={require('@/assets/images/voiture2.png')} style={styles.ima}/>
                <Text style={{paddingRight:50, paddingTop:10}}>confort,
                prix:1400f</Text>
            </View>
            
            <View style={styles.block3}> 
                <Image source={require('@/assets/images/voiture1.png')} style={styles.ima}/>
                <Text style={{paddingRight:50, paddingTop:10}}>rapide,
                prix:2000f</Text>
            </View>
            
            <View style={styles.block4}> 
                <Image source={require('@/assets/images/carre.png')} style={{paddingLeft:20, paddingTop:10,}} />
                <Text style={{paddingRight:100}}>
                obtenez 50% de reduction lors de votre prochain
                trajet
                </Text>         
            </View>
           <TouchableOpacity style={styles.bouton}>
            <Text style={{color:"white"}}>Commander</Text>
            </TouchableOpacity> 
            
        </View>    
    );

}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        alignItems:'center',
        flexDirection:'column',

    },
    block1:{
        borderWidth:1,
        justifyContent:"space-between",
        flexDirection:"row",
        width:350,
        height:64,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        //marginRight:50,
    },
    block2:{
        borderWidth:1,
        justifyContent:"space-between",
        flexDirection:"row",
        width:350,
        height:64,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    block3:{
        borderWidth:1,
        justifyContent:"space-between",
        flexDirection:"row",
        width:350,
        height:64,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    block4:{
        borderWidth:1,
        justifyContent:"space-between",
        flexDirection:"row",
        width:350,
        height:64,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    bouton:{
        borderRadius:10,
        backgroundColor:'#088A4B',
        width:100,
        height:44,
        marginTop:40,
        //borderWidth:1,
        alignItems:"center",
        paddingTop:10,

    },
    header:{
        justifyContent:'space-between',
        marginTop:10,
    },
    blockprincipal:{
        marginBottom:20,
    },
    ima:{
        width:160,
        height:60,
    }
    
})



export default Trajet;