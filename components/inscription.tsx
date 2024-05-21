import React, { useState } from 'react';
import { View, Text,Image,Button, TextInput,StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform,ScrollView } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="arrow-back" size={30} color="black"/>
    </TouchableOpacity>
  )
  
};


const Inscription = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginPress = () => {
    console.log('Se connecter pressed');
  };



  const handleSignup = () => {
    console.log('Name:', name);
    console.log('phone:', phone);
    console.log('Password:', password);
  };


  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <ScrollView contentContainerStyle={styles.inner}>
    
    <View style={styles.container}>

      <BackButton></BackButton>
      <Text style={styles.inscription}>
        Champ d'inscription
      </Text>
      <Image
        source={require('@/assets/images/inscription.png')}
      />
      <TextInput
        style={styles.name}
        value={name}
        onChangeText={setName}
        placeholder="Nom"
      />
      <View style={styles.number}>
        <PhoneInput
          initialCountry="cm"
          value={phone}
          onChangePhoneNumber={setPhone}
          flagStyle={{ width: 40, height: 30, borderWidth: 0,marginLeft:5, }}
        />
      </View>

      <View style={styles.password}>
        <TextInput
          style={{ padding: 10, marginTop:5, width: '90%',fontSize:20, }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholder="Creer un mot de passe"
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Icon
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            style={{ marginTop: 15,}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.inscrire}  onPress={handleSignup}>
        <Text style={{ color: '#fff', fontSize: 20 }}>S'inscrire</Text>
      </TouchableOpacity>


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
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
};
const styles = StyleSheet.create({

  container:{
  },
inner:{
  height:760,
},
  inscription:{ 
    fontSize: 32,
    marginBottom: 20, 
    textAlign:'center',
    color:'#088A4B',
  },
 name:{
  width:360,
  height:52,
  borderWidth: 1,
  borderColor: '#088A4B',
  borderRadius: 15,
  padding: 10,
  marginBottom: 15,
  alignSelf:'center',
  fontSize:20,
  alignItems: 'center', 
},
number:{ 
  width:360,
  height:52, 
  flexDirection: 'row', 
  alignItems: 'center', 
  alignSelf:'center',
  borderRadius: 15, 
  marginBottom: 15,
  borderWidth: 1, 
  borderColor: '#088A4B', 
},
password:{ 
  flexDirection:'row', 
  borderWidth: 1,
  borderRadius: 15, 
  height:52,
  width:360,
  marginBottom: 15,
  borderColor: '#088A4B', 
  alignItems: 'flex-start', 
  alignSelf:'center',
},
inscrire:{
  backgroundColor: '#088A4B',
  opacity:93,
  padding: 10,
  borderRadius: 10,
  marginTop: 60,
  alignItems: 'center',
  width:140,
  height:47,
  alignSelf:'center',
},
lineContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:25,
  
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
  marginTop:15,

},
haveAccount:{
  fontSize:16,
},
seConnecter:{
  color:'#088A4B',
  textDecorationLine:'none',
},
});
export default Inscription;