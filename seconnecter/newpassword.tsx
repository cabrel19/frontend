import react from 'react';
import { View,  Text, Pressable, TextInput, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {router} from 'expo-router'


const Newpassword = () =>{
    return(
        <View style = {styles.container}>
            <Pressable onPress= {()=>
              router.push("/motdepasseoublier")  }>
            <AntDesign name="left" size={24} color="black" />
            </Pressable>
            {'\n'}
            {'\n'}
            <Text>Creer un nouveau de passe</Text>
            {'\n'}
            {'\n'}
            <TextInput style={styles.text} placeholder='Mot de passe'/>
            {'\n'}
            {'\n'}
            <TextInput style={styles.text} placeholder=' Confirmer le Mot de passe'/>
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            <Pressable>
                <Button   title='Valider' />
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
        
    }
});
export default Newpassword;