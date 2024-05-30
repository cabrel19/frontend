import React from "react";
import { useState, useEffect } from "react";
import { Text,StyleSheet, View,Image, TouchableOpacity } from "react-native";
import  Share from "react-native-share";

const Offres = () => {

    /*const shareMessage =  () => {
        const shareOptions = {
          message: 'Ceci est un texte de test à partager via d'autres applications!',
        };*/
    
        const shareMessage = async  () => {
            const shareOptions = {
                message:'promotion',
            }
            try{
                const ShareReponse  = await Share.open(shareOptions);
            }
            catch(error) {
               console.log('Error =>', error);
            }


       /* Share.open(shareOptions)
          .then((res) => console.log('Share response:', res))
          .catch((err) => {
            err && console.log('Error sharing:', err);
          });*/
      };

    return(

        <View style={styles.container}>
            <Text style={{alignSelf:'center', fontSize:22}}>
                <Text style={{color:'#088A4B'}}> G</Text>
                O
                <Text style={{color:'#088A4B'}}>M</Text>
                OBIL
            </Text>

            <Image
              source={require('@/assets/images/offre.png')}
              style={styles.image}
            />

            <Text style={{alignSelf:'center',fontSize:20,marginTop:10, fontFamily:'abel'}}>PROFITEZ DE CETTE OFFRE!</Text>

            <View>
              <Text style={{ fontFamily:'archivo black',fontSize:20,marginLeft:50, marginTop:100,}}>INVITEZ UN AMI</Text>
            </View> 

            <Text style={{marginLeft:40,fontFamily:'abel',width:"80%", fontSize:16,}}>
                Votre ami recevra une reduction de 10% sur sa première course.
            </Text>


            <View>
              <Text style={{alignSelf:'center',fontSize:20, marginTop:30, fontFamily:'archivo black'}}>PROFITEZ DE
              <Text style={{alignSelf:'center', fontFamily:'archivo black',fontSize:20, color:'#088A4B'}}> 50% DE REDUCTION</Text>
              </Text>
            </View> 
                
            <Text style={{alignSelf:'center',fontFamily:'abel',width:"90%",fontSize:16,}}>
            Une fois qu’il aura effectue sa première course,vous bénéficierez de 50% de reduction sur votre 
            prochain trajet.
            </Text>
            

            <TouchableOpacity style={styles.partager} onPress={shareMessage }>
                <Text style={{fontSize: 20}}>PARTAGER</Text>
                <Text style={{fontSize:16}}>Il reste 700 codes promotionnels</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.copier}>
                <Text style={{fontSize: 16, marginRight:150,}}>3420T2Y54</Text>
                <Text style={{fontSize:16}}>Copier</Text>
            </TouchableOpacity>


        </View>

    );
};

const styles = StyleSheet.create ({

    container:{
        backgroundColor:'white',
        height:'100%',
    },

    image:{
        width:384,
        height:275,
    },

    partager:{
        padding: 13,
        borderRadius: 15,
        marginTop: 40,
        width:312,
        height:46,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#088A4B'
    
    },

    copier:{
        borderRadius: 15,
        marginTop: 20,
        width:312,
        height:38,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#777777',
        flexDirection:'row',

    },


});

export default Offres;