import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, Image, ImageBackground, TextInput, StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons';

const Connexion = ({ navigation }: any) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);//masquer le password par default
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale
  const phoneInput = useRef(null);

  useEffect(() => {
    // Changer la couleur du bouton en vert si tout les champs sont correctement remplis, sinon gris
    if (phoneNumber.trim().length === 13 && password.trim().length > 7) {
      setButtonColor('#088A4B'); // Couleur verte
    } else {
      setButtonColor('#d3d3d3'); // Couleur grise
    }
  }, [phoneNumber, password]);


  const connecter = () => {
    // conditions a respecter pour aller a la page suivante
    if (phoneNumber === '' || password === '') {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires');
      return;//tous les champs remplis
    }

    if (password.trim().length < 8) {
      Alert.alert('Erreur', 'Votre mot de passe doit contenir au moins 08 caractères.');
      return;// password supérieur a 7 caractères
    }
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }//vérifier si le numero est valide

    navigation.replace("Home");
  };

  const toggleShowPassword = () => {
    // masquer ou afficher le mot de passe
    setShowPassword(!showPassword);
  };


  return (

    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>

          <ImageBackground
            source={require('@/assets/images/background.png')}
            style={styles.container}
            
          >
            <Image
            
              source={require('@/assets/images/connexion.png')}
              style={styles.image}
            />

            <View style={styles.formulaire}>

              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="CM"
                layout="first"
                onChangeFormattedText={text => { setPhoneNumber(text); }}
                containerStyle={styles.PhoneInput}
                textContainerStyle={styles.enterNumber}
              />

              <View style={styles.password}>
                <TextInput
                  style={{ padding: 10, marginTop: 5, width: '90%', fontSize: 20, }}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Mot de passe"
                  keyboardType="web-search"
                  autoCorrect={false}
                />
                <TouchableOpacity onPress={toggleShowPassword}>
                  <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    size={20}
                    color='#088A4B'
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.forgetPassword} onPress={() => navigation.navigate("Vérification")}>
                <Text style={{ color: '#088A4B', fontSize: 16 }}>Mot de passe oublier ?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ ...styles.connecter, backgroundColor: buttonColor }} onPress={connecter}>
                <Text style={{ color: '#fff', fontSize: 20, }}>Se connecter</Text>
              </TouchableOpacity>


              <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.text}>ou</Text>
                <View style={styles.line} />
              </View>

              <View style={styles.footer}>
                <Text style={styles.notAccount}>
                  Vous n'avez pas de compte?
                  <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
                    <Text style={styles.inscrire}>    S'inscrire</Text>
                  </TouchableOpacity>
                </Text>
              </View>

            </View>

          </ImageBackground>

        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  image: {
    width: "100%",
    height: "45%",
  },
  formulaire: {
    width: "85%",
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 50,
    borderRadius: 15,
    flex: 1,
  },
  PhoneInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    height: 62,
    width: '90%',
    marginTop: 20,
    borderColor: '#088A4B',
    alignSelf: 'center',
  },
  enterNumber: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: "100%",
  },
  password: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    height: 62,
    width: '90%',
    borderColor: '#088A4B',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  forgetPassword: {
    width: '55%',
    height: 22,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  connecter: {
    backgroundColor: '#088A4B',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '40%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,

    justifyContent: 'center',
  },
  line: {
    width: "30%",
    height: 1,
    backgroundColor: '#088A4B',
  },
  text: {
    width: "15%",
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 60,

  },
  notAccount: {
    fontSize: 16,
    marginBottom: 25,
  },
  inscrire: {
    color: '#088A4B',
    textDecorationLine: 'none',
  },
});
export default Connexion;