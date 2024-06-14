import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet,
  Alert, Keyboard
} from 'react-native';
import Back from '@/components/btnBack';
import { app, auth, firestore, PhoneAuthProvider, signInWithCredential } from '@/firebase.config';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { addDoc, collection } from 'firebase/firestore';
import { OtpInput } from "react-native-otp-entry";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const OtpSignUp = ({ route, navigation }: any) => {

  const { phoneNumber, name, password } = route.params;
  const [codeVerification, setCodeVerification] = useState('');
  const [verificationId, setVerificationId] = useState("")
  const [renvoyer, setRenvoyer] = useState(true);
  const [secondes, setSecondes] = useState(10);// décomptage de 10 sec par default
  const [error, setError] = useState("")
  const recaptchaVerifier = useRef(null)
  const inputRef = useRef([]);
 

  useEffect(() => {
    const sentVerificationCode = async () => {
      try {
        const phoneProvider = new PhoneAuthProvider(auth)
        const id = await phoneProvider.verifyPhoneNumber(`${phoneNumber}`, recaptchaVerifier.current!)
        setVerificationId(id)
        //setCode(true)
        Alert.alert("Succès", "Le code a été envoyé avec succès !");

      } catch (error: any) {
       // console.error("Erreur lors de l'envoi du code:", error);
        // setError(error.message);
        Alert.alert(
          "Erreur",
          `Erreur lors de l'envoi du code: ${error.message}`
        );

      }
    }
    sentVerificationCode()

  }, [phoneNumber])

  const confirmCode = async () => {
    try {
      if (verificationId) {
        const credential = PhoneAuthProvider.credential(verificationId, codeVerification)
        await signInWithCredential(auth, credential)
        await addDoc(collection(firestore, "users"), {
          name: name, phone: phoneNumber, password: password
        })
        .then (() => navigation.navigate('home'))
      }
    } catch (error: any) {
      Alert.alert("une erreur lors de la confirmation", error.message)
    }
  }


  useEffect(() => {
    //désactivation et activation du bouton renvoyer le code
    let timer: any;
    if (renvoyer && secondes > 0) {
      timer = setInterval(() => {
        setSecondes((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondes === 0) {
      setRenvoyer(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [renvoyer, secondes]);

  const décomptage = (secondes: any) => {
    // faire le décomptage 00:30
    const minutes = Math.floor(secondes / 60);
    const remainingSeconds = secondes - minutes * 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes} : ${formattedSeconds}`;
  };

  const resendCode = () => {
    // l'appuie sur le bouton relance le décomptage et désactive le bouton
    setSecondes(10);
    setRenvoyer(true);
    Alert.alert('Info', 'Un nouveau code a été renvoyer');

  };






  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
        />
        <Back />
        <Text style={{ fontSize: 25, marginTop: 25 }}>Un code à cinq chiffres vous a été envoyé au : {phoneNumber}</Text>

        <OtpInput
          numberOfDigits={6}
          focusColor="green"
          focusStickBlinkingDuration={500}
          onFilled={(text) => setCodeVerification(text)}
          textInputProps={{ accessibilityLabel: "One-Time-Password", }}
          theme={{
            //containerStyle: styles.containerOtp,
            inputsContainerStyle: styles.inputsContainer,
            // pinCodeContainerStyle: styles.pinCodeContainer,
            //pinCodeTextStyle: styles.pinCodeText,
            //focusStickStyle: styles.focusStick,
            //focusedPinCodeContainerStyle: styles.activePinCodeContainer
          }}
        />
        <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 15 }}> vous pourriez demander un nouveau code dans :</Text>
        <Text style={styles.secondes}>{décomptage(secondes)} </Text>

        <View style={{ marginTop: 40 }}>
          <Button title="Renvoyer un code" color="#088A4B" onPress={resendCode} disabled={renvoyer} />
        </View>

        <TouchableOpacity style={styles.vérifier} onPress={confirmCode}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>VÉRIFIER</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  back: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: 70,
    flexDirection: 'row'
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop: 70,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#088A4B',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  secondes: {
    display: 'flex',
    fontSize: 25,
    width: 100,
    height: 35,
    borderWidth: 1,
    borderColor: '#088A4B',
    borderRadius: 5,
    marginTop: 15,
    textAlign: 'center',


  },
  vérifier: {
    backgroundColor: '#088A4B',
    padding: 13,
    borderRadius: 10,
    marginTop: 110,
    width: 140,
    height: 47,
    alignSelf: 'center',
  },
  inputsContainer: {
    marginTop: '8%'
  },

});

export default OtpSignUp;