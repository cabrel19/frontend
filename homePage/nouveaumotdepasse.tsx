import {StyleSheet, Text, TouchableOpacity, View, Alert, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';



  const Nouveaumotdepasse  = ({ navigation }: any) =>  {const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (

    <KeyboardAvoidingView behavior={"padding"} style={{justifyContent:'flex-end'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.header}>
         <Image source={require('@/assets/images/5.png')}  style={{ margin: 45}}/>  
      </View>
      <View>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 22 }}>
          Saisissez votre nouveau mot de passe
        </Text>
      </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <TextInput
      style={{padding: 18,
        borderRadius: 10,
        borderColor: "rgba(119, 119, 119, 1)",
        borderWidth: 1,
        height: 55,
        width: "90%"}}
      value={password}
      onChangeText={setPassword}
      secureTextEntry={showPassword}
      placeholder="Nouveau mot de passe"
      placeholderTextColor= 'black'
    />
    <TouchableOpacity onPress={toggleShowPassword} style={{top: -38, left: 150}}>
    <Feather name="eye-off" size={20} color="#666666" />
    </TouchableOpacity>
   
  </View>
  <View>
        
      </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 6}}>
        <TextInput
      style={{padding: 18,
        borderRadius: 10,
        borderColor: "rgba(119, 119, 119, 1)",
        borderWidth: 1,
        height: 55,
        width: "90%"}}
      value={password}
      onChangeText={setPassword}
      secureTextEntry={showPassword}
      placeholder="Repetez mot de passe"
      placeholderTextColor= 'black'
    />
    <TouchableOpacity onPress={toggleShowPassword} style={{top: -38, left: 150}}>
    <Feather name="eye-off" size={20} color="#666666" />
    </TouchableOpacity>
   
  </View>

    <View style={styles.footer}>
      
    </View>
    <TouchableOpacity onPress={() => Alert.alert('')} style={{top: 70, left: 140}}>
          <View style={{ backgroundColor: '#088A4B',
              padding: 15,
              borderRadius: 10,
              height: 47,
              width: 140,
              
              
              
          }}>
            <Text style={{ color: 'white', 
              textAlign: 'center',}}>SUIVANT</Text>

            </View>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    
  );

}


const styles = StyleSheet.create({
container: {
  
},

header: {
width: 425,
height: 379,
backgroundColor: 'rgba(217, 217, 217, 1)'
},
footer: {

},

})

export default Nouveaumotdepasse;
