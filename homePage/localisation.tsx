import react, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import { Entypo } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import {addusergeo} from '@/homePage/database/db';


const Localisation = () =>{


    const [ErrorMsg,  setErrorMsg] = useState(null)
    const [latitude,  setlatitude] = useState(null)
    const [longitude,  setlongitude] = useState(null)
    const [islocating,  setlocating] = useState(false)


    const handgeolocation = async () =>{
        //permission(objet)
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('géolocalsation refuser');
        return;
      }
        // verification de la géolocalisation
        try{


            setlocating(true)

         let location = await Location.getCurrentPositionAsync({});
         console.log(location)
         
         setlatitude(location.coords.latitude);
         setlongitude(location.coords.longitude);
         setlocating(false);


        }catch(error){
            setErrorMsg("probleme de geolocalisation")
        }

        }
    
        const saveTOSQLite = async (latitude, longitude) =>{
            const dbInserReult = await addusergeo(latitude, longitude)
        }

        const handsubmit = async () =>{
                //save in bd
                saveTOSQLite(latitude, longitude);
                //redirection vers le home
        }

        let geotext = '';

        if(ErrorMsg){
            geotext = ErrorMsg
        }

        else if (latitude !== null && longitude !==null){
            geotext = "ok"
        }


    return(
      <View style={styles.container}>

        {
            islocating &&  <ActivityIndicator size="large"   color="black" />

        }

        <TouchableOpacity style={styles.touche} 
        onPress={handgeolocation}>
            <View style={styles.globe}>
                <Text style={{fontSize:19, marginBottom:16}}>
                    Cliquez pour vous géolocaliser</Text>
                <Entypo name="globe" size={100} color="black" />
            </View>
            </TouchableOpacity>

            {
                geotext == 'ok'&& <TouchableOpacity style={styles.touche} 
                onPress={handsubmit}>
                <View style={styles.bouton}>
                    <Text style={{fontSize:19, marginBottom:16}}>
                    Bravo! vous pouvez continuez</Text>
                </View>
                </TouchableOpacity>
            }


            <TouchableOpacity style={styles.touche} 
            onPress={handsubmit}>
            <View style={styles.bouton}>
                <Text style={{fontSize:19, marginBottom:16}}>
                Bravo! vous pouvez continuez</Text>
            </View>
            </TouchableOpacity>
      </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    touche:{
        marginVertical:9,
    },
    globe:{
        alignSelf:"center"
    },
    bouton:{
       backgroundColor:"turquoise",
       borderRadius:7,
       padding:9, 
    },
    btn:{
        fontSize:17,
        textAlign:"center",
        textTransform:"uppercase",
    }
});

export default Localisation;