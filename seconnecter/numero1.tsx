import react, {useState} from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button, Pressable} from 'react-native';
import {router} from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
//import input from '../component/input';


export default function Connexion()
{

const [text1, setText] = useState();
const [number1, setNumber] = useState();

    return(
        <View style={styles.container}>
                <Image source={require("./assets/")}/>
                <TextInput style = {styles.saisi} placeholder="Numero de telephone" value={text1}  
                onChangeText={text => setText(text)}/>
                {'\n'}
                {'\n'}
            <View style = {{flexDirection:"row"}}>
                <TextInput style = {styles.saisi}  placeholder="Mot de passe" secureTextEntry value={number1}
                onChangeText={number => setNumber(number1)} />
                <AntDesign name="eye" size={24} color="black" />
            </View>
                {'\n'}
                {'\n'}
            
            <Pressable onPress = {()=>
              router.push("") }>
                <Text style = {{color:"088A4B"}}>Mot de passe oublier</Text>
            </Pressable>
            <Pressable onPress = {()=>
              router.push("") }>
                <Button  title="connexion"/>
            </Pressable>
            <View style = {styles.block1}>
                <Text>vous n'avez pas de compte?</Text>
                <Pressable onPress = {()=>router.push("")}>
                <Text style = {{color:"088A4B"}}>S'inscrire</Text>
                </Pressable>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        },
    saisi:{
        borderRadius:20,
        borderColor:'088A4B',
        width:"80%",
        height:40,
    }  ,
    block1:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        marginBottom:20,
    }  

    

})











