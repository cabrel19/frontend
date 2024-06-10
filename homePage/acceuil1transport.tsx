import react, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
//import {Autocomplete } from  

const Acceuil = () =>{

    
//   const handleSearch = (text) => {
//     const filtered = villesDuCameroun.filter((ville) =>
//       ville.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredVilles(filtered);
//     setQuery(text);
//   };

const [Destination, setDestination] = useState('');
const handlesubmit = () =>{
    if(Destination.length > 0){
        console.log(Destination)
    }
    else{
        alert("veuillez saisir votre destination ")
    }


}
    return(
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={{paddingLeft:10, paddingTop:10}}>Ma localisation</Text>
                </View>
            <TextInput placeholder=' Entrez votre destination' style={styles.text}
            onChangeText={text =>setDestination(text)}
            />
            <TouchableOpacity style={styles.bouton1}
            onPress={handlesubmit} 
            >
                
            <Text style={{color:"white"}}>Valider</Text>
            
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1,


    },
    text:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"088A4B",
        borderRadius:10,
        width:340,
        height:53,
        marginLeft:20,
        marginRight:20,
        marginTop:10,

    },
    bouton1:{ 
        borderRadius:10,
        backgroundColor:'#088A4B',
        width:100,
        height:44,
        marginTop:40,
        //borderWidth:1,
        alignItems:"center",
        paddingTop:10,



    },
    block:{
        borderWidth:1,
        borderRadius:10,
        width:340,
        height:53,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
    },
    block1:{
        alignItems:"center",
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'088A4B',
        width:150,
        height:44,
        marginBottom:40,
        paddingTop:10,

    }
    
})

export default Acceuil;