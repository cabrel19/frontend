import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, Image, ImageBackground, Button, Alert, KeyboardAvoidingView,
  StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Keyboard
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons';

const FirstPage = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);//masquer le password par default
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale
  const phoneInput = useRef(null);

  const inscrire = () => {
    // conditions a respecter pour aller a la page suivante
    if (name === '' || phoneNumber === '' || password === '') {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires');
      return;
    }//tous les champs remplis

    if (password.length < 8) {
      Alert.alert('Erreur', 'Le mot de passe doit contenir au moins 8 caractères');
      return;
    }// password supérieur a 7 caractères

    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }//verifie si le numero est valide

    navigation.navigate('OTP', { phoneNumber });
  };

  useEffect(() => {
    // Changer la couleur du bouton en vert si tout les champs sont correctement remplis, sinon gris
    if (name.trim().length > 0 && phoneNumber.trim().length === 13 && password.trim().length > 7) {
      setButtonColor('#088A4B'); // Couleur verte
    } else {
      setButtonColor('#d3d3d3'); // Couleur grise
    }
  }, [name, phoneNumber, password]);

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
              source={require('@/assets/images/inscription.png')}
              style={styles.image}
            />

            <View style={styles.formulaire}>
              <TextInput
                style={styles.name}
                value={name}
                onChangeText={setName}
                placeholder="Entrez votre nom"
                keyboardType="web-search"
                autoCorrect={false}
              />

              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="CM"
                layout="first"
                onChangeFormattedText={text => { setPhoneNumber(text); }}
                containerStyle={styles.PhoneInput}
                textContainerStyle={styles.enterNumber}

              />

              <View style={styles.Password}>
                <TextInput
                  style={styles.enterPassword}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Creer un mot de passe"
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

              <TouchableOpacity style={{ ...styles.inscrire, backgroundColor: buttonColor }} onPress={inscrire}>
                <Text style={{ color: '#fff', fontSize: 20 }}>S'inscrire</Text>
              </TouchableOpacity>

              <View style={styles.lineContainer}>

                <View style={styles.line}></View>
                <Text style={styles.text}>ou</Text>
                <View style={styles.line}></View>

              </View>

              <View style={styles.footer}>
                <Text style={styles.haveAccount}>
                  Vous avez deja un compte?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Connexion")} style={styles.seConnecter}>
                  <Text style={{color:'#088A4B'}}>    Se connecter</Text>
                </TouchableOpacity>

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
    height: "52%",
    marginBottom: 50,
    borderRadius: 15,
    flex: 1
  },
  name: {
    width: "90%",
    marginTop: 10,
    height: 62,
    borderWidth: 1,
    borderColor: '#088A4B',
    borderRadius: 15,
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
  },
  PhoneInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    height: 62,
    width: '90%',
    marginTop: 10,
    borderColor: '#088A4B',
    alignSelf: 'center',
    alignItems:'center'
  },
  enterNumber: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: "100%",
  },
  Password: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    height: 62,
    width: '90%',
    marginTop: 10,
    borderColor: '#088A4B',
    alignItems: 'center',
    alignSelf: 'center',
  },
  enterPassword: {
    padding: 10,
    width: '90%',
    fontSize: 20,
  },
  inscrire: {
    backgroundColor: '#088A4B',
    opacity: 93,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    width: '40%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  line: {
    width: "40%",
    height: 1,
    backgroundColor: '#088A4B',
  },
  text: {
    width: "15%",
    height: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },
  haveAccount: {
    fontSize: 16,
  },
  seConnecter: {
    color: '#088A4B',
    textDecorationLine: 'none',
  },
});

export default FirstPage;