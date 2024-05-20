import { useState } from 'react';
import React from 'react';
import PhoneInput from 'react-native-phone-input';
import { Image, StyleSheet,Text,View,TextInput,Button,TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function inscription() {

  const handleLoginPress = () => {
    console.log('Se connecter pressed');
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
    return (
    <View style={styles.container}>
      
      <View style={styles.back}>
        <Button
          title="< back"
          color="black"
        />
      </View>
      
      <Text style={styles.textHearder}> Champ d'inscription</Text>
      
      <Image
        source={require('@/assets/images/inscription.png')}
      />

      <TextInput placeholder='Entrez votre nom'style={styles.textInput}/>
      <PhoneInput initialCountry="cm"placeholder='Entrez votre numero'style={styles.textInput}/>

      <View style={styles.pwd}>
  <TextInput
    style={styles.enterPwd}
    secureTextEntry={!showPassword}
    placeholder="creer votre mot de passe"
  />
  <TouchableOpacity onPress={toggleShowPassword}>
    <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} style={styles.eyes} />
  </TouchableOpacity>
</View>

<View style={styles.pwd}>
  <TextInput
    style={styles.enterPwd}
    secureTextEntry={!showPassword}
    placeholder="confirmer le mot de passe"
  />
  <TouchableOpacity onPress={toggleShowPassword}>
    <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} style={styles.eyes} />
  </TouchableOpacity>
</View>
        
        <View style={styles.next}>
            <Button
              title="SUIVANT"
              color="white"
            />        
        </View>

        <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.text}>ou</Text>
            <View style={styles.line} />
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.haveAccount}> 
            Vous avez deja un compte? 
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.seConnecter}>    Se connecter</Text>
            </TouchableOpacity>
          </Text>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
 container:{
  height:200,
 },
 back:{
   alignItems:'flex-start',
   marginLeft:5,
 },
 textHearder:{
  textAlign:'center',
  fontSize:30,
  color:'green',
},
textInput:{
  borderWidth:2, 
  borderColor:'green',
  width:"80%",
  height:"25%", 
  fontSize:20,
  marginTop:10, 
  alignItems:'center',
  textAlign:'center', 
  marginLeft:40,
  borderRadius:10,
},
next:{
  marginTop:30,
  backgroundColor:'green',
  color:'white',
  width:"50%",
  marginLeft:90,
  borderRadius:'10',
},
pwd:{
  flexDirection: 'row', 
  textAlign:'center',
  borderWidth:2, 
  borderColor:'green',
  width:"80%",
  height:"25%", 
  fontSize:20,
  marginTop:10, 
  alignItems:'center',
  textAlign:'center', 
  marginLeft:40,
  borderRadius:10,
  display:'flex',
},
eyes:{
  marginLeft:95,
  width:"20%"
},
enterPwd:{
    width:"60%",
    fontSize:16,
},
lineContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:15,
    
    justifyContent:'center',
},
line:{
     width:"40%",
     height:1,
    backgroundColor:'black',
},
text:{
    width:"15%",
    fontSize:16,
    textAlign:'center',
},
footer:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,

},
haveAccount:{
  fontSize:16,
},
seConnecter:{
  color:'green',
  textDecorationLine:'none',
},
});