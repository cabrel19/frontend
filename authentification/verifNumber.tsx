import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  View, Image, Text, KeyboardAvoidingView, Alert,
  TouchableOpacity, Button, ImageBackground,
  TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard
}
  from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Back from "@/components/btnBack";

const Vérification = ({ navigation }: any) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale
  const phoneInput = useRef(null);

  useEffect(() => {
    // Changer la couleur du bouton en vert si tous les champs sont remplis, sinon gris
    if (phoneNumber.trim().length === 13) {
      setButtonColor('#088A4B'); 
    } else {
      setButtonColor('#d3d3d3'); 
    }
  }, [phoneNumber]);


  const handleSubmit = () => {
    //vérifier si le numero est correct
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }
    navigation.navigate("NewPassword");
  };


  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container} >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <ImageBackground
            source={require('@/assets/images/background.png')}
            style={styles.container}
          >
<Back/>
            <Image
              source={require('@/assets/images/forget.png')}
              style={styles.image}
            />

            <View style={{ width: "85%", alignSelf: 'center', backgroundColor: 'white', height: "40%", marginBottom: 40, borderRadius: 15 }}>

              <Text style={styles.text}>Veuillez Entrer votre Numero de Telephone :</Text>

              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="CM"
                layout="first"
                onChangeFormattedText={text => { setPhoneNumber(text); }}
                containerStyle={styles.PhoneInput}
                textContainerStyle={styles.enterNumber}
              />

              <TouchableOpacity style={{ ...styles.bouton, backgroundColor: buttonColor }} onPress={handleSubmit} >
                <Text style={{ color: "white", fontSize: 17, }}>VERIFIER</Text>
              </TouchableOpacity>

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
    height: "50%",
    width: "130%",
    alignSelf: 'center',
  },
  text: {
    width: "80%",
    height: 50,
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop:10,
    fontFamily: 'InriaSans-Regular',
  },
  PhoneInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    height: 62,
    width: 300,
    marginBottom: 15,
    borderColor: '#088A4B',
    alignItems: 'center',
    alignSelf: 'center',
  },
  enterNumber: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: "100%",
  },
  bouton: {
    backgroundColor: '#088A4B',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    width: 150,
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
  },
});


export default Vérification;