import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet,ImageBackground,ScrollView, KeyboardAvoidingView, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Back from '../components/btnBack';

const NewPassword = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // masquer initialement
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // masquer initialement
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale

  useEffect(() => {
    // Changer la couleur du bouton en vert si le champ de texte contient au moins 7 caractères, sinon gris
    if (password.trim().length > 7 && confirmPassword.trim().length > 7) {
      setButtonColor('#088A4B'); // Couleur verte
    } else {
      setButtonColor('#d3d3d3'); // Couleur grise
    }
  }, [password, confirmPassword]);

  const handleSubmit = () => {
    // afficher une alerte valider si les textes entrés sont identiques et contiennent aux moins 7 caractères si non afficher erreur
    if (password.trim().length > 7 && confirmPassword.trim().length > 7 && password.trim() === confirmPassword.trim()) {
      navigation.replace("Home")
    } else {
      Alert.alert('Erreur', 'Les mots de passe ne sont pas identiques.');
    }
  };

  const toggleShowPassword = () => {
    // masquer ou afficher le mot de passe lorsqu'on clique sur l'oeil
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ImageBackground
      source={require('@/assets/images/newPassword.png')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        //Éviter de masquer le champ de saisir
        behavior={'padding'}
        style={styles.keyboardAvoidingView} >

        <Back />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View style={styles.formulaire}>
           


            <Text style={styles.text}>Creer un nouveau mot de passe</Text>

            <View style={styles.Password}>
              <TextInput
                style={styles.enterPassword}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity onPress={toggleShowPassword}>
                <FontAwesome
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  style={{color: '#088A4B' }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.Password}>
              <TextInput
                style={styles.enterPassword}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />

              <TouchableOpacity onPress={toggleShowConfirmPassword}>
                <FontAwesome
                  name={showConfirmPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  style={{color: '#088A4B' }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ ...styles.valider, backgroundColor: buttonColor }} onPress={handleSubmit}>
              <Text style={{ color: "#fff" }}>VALIDER</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>

   

    </KeyboardAvoidingView> 
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  formulaire: {
    width: "85%",
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: '10%',
    height: '50%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: '3%'
  },
  text: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 10,
    width:'80%'
  },
  Password: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    height: '18%',
    width: '90%',
    marginTop: '4%',
    borderColor: '#088A4B',
    alignItems: 'center',
    alignSelf: 'center',
  },
  enterPassword: {
    padding: '3%',
    width: '90%',
    fontSize: 22,
  },
  valider: {
    borderRadius: 10,
    marginTop: 40,
    width: 147,
    overflow: 'hidden',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default NewPassword;