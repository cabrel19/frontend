import react from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, Pressable} from 'react-native';
//import { AntDesign } from '@expo/vector-icons';
//import input from '../component/input';

const Verification = ()=>
{
    return(
        <View style = {styles.container}>
            <Image source={require("@/assets/images/password 1.png")}/>
            <Text>Verification De Votre Numéro De Téléphone</Text>
            <TextInput style = {styles.test} placeholder='entrer le code de verification'
                keyboardType='numeric'
            />
            <Pressable onPress={()=>console.warn('code Envoyer')}>
            <Button title='Envoyer Le Code' color='088A4B'/>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    test:{
        width:"80%",
        height:40,
        borderRadius:20,
        borderColor:'088A4B',
    },
    
})


export default  Verification;


