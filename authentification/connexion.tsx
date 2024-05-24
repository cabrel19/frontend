import React, { useState } from 'react';
import { View, Text,Image,TextInput,StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, TouchableWithoutFeedback, Keyboard,Alert} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/FontAwesome';

const Connexion = ({navigation}) => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (phone.length > 0 && password.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputChange = (setter) =>
    (value) => {
      setter(value);
      validateForm();
    };

    const handleSignup = () => {
      if (isFormValid) {
        navigation.navigate("Home");
      } else {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      }
  
    };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (

    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>

      <Image
        source={require('@/assets/images/connexion.png')}
        style={{marginTop:30,height:350,}}
      />
      <View style={styles.number}>
        <PhoneInput
          initialCountry="cm"
          value={phone}
          onChangePhoneNumber={handleInputChange(setPhone)}
          flagStyle={{ width: 40, height: 30, borderWidth: 0,marginLeft:5, }}
        />
      </View>

        <View style={styles.password}>
            <TextInput
              style={{ padding: 10, marginTop:5, width: '90%',fontSize:20, }}
              value={password}
              onChangeText={handleInputChange(setPassword)}
              secureTextEntry={!showPassword}
              placeholder="Mot de passe"
              keyboardType="web-search"
            />
            <TouchableOpacity onPress={toggleShowPassword}>
                <Icon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  style={{ marginTop: 15,}}
                />
            </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> navigation.navigate("ForgetPwd")}>
              <Text style={{color:'#088A4B', marginLeft:20}}>Mot de passe oublier ?</Text>
            </TouchableOpacity>

      <TouchableOpacity style={styles.connecter}  onPress={handleSignup}>
        <Text style={{ color: '#fff', fontSize: 20,}}>Se connecter</Text>
      </TouchableOpacity>


      <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.text}>ou</Text>
            <View style={styles.line} />
      </View>

      <View style={styles.footer}>
          <Text style={styles.notAccount}> 
            Vous n'avez pas de compte? 
            <TouchableOpacity onPress={()=> navigation.navigate("Inscription")}>
              <Text style={styles.inscrire}>    S'inscrire</Text>
            </TouchableOpacity>
          </Text>
        </View>

    </View>

    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  );
};
const styles = StyleSheet.create({

  container:{
    justifyContent:'center',
    backgroundColor:'white',
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
connecter:{
  backgroundColor: '#088A4B',
  padding: 10,
  borderRadius: 10,
  marginTop: 70,
  alignItems: 'center',
  width:140,
  height:47,
  alignSelf:'center',
},
lineContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:40,
  
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
  marginTop:40,
  height:60,

},
notAccount:{
  fontSize:16,
  marginBottom:25,
},
inscrire:{
  color:'#088A4B',
  textDecorationLine:'none',
},
});
export default Connexion;