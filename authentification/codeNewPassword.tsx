import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, ActivityIndicator, Alert, Keyboard } from 'react-native';
import Back from '@/components/btnBack';
import { app, auth, firestore, PhoneAuthProvider, signInWithCredential } from '@/firebase.config';
import { OtpInput } from "react-native-otp-entry";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { addDoc, collection } from 'firebase/firestore';


const OtpSignIn = ({ route, navigation }: any) => {

  const { phoneNumber } = route.params;
  const [codeVerification, setCodeVerification] = useState('');
  const [verificationId, setVerificationId] = useState("")
  const [renvoyer, setRenvoyer] = useState(true);
  const [secondes, setSecondes] = useState(10);// décomptage de 10 sec par default
  const [loading, setLoading] = useState(false); // Nouvel état pour le chargement
  const recaptchaVerifier = useRef(null)
  const inputRef = useRef([]);


  useEffect(() => {
    const sentVerificationCode = async () => {
      try {
        const phoneProvider = new PhoneAuthProvider(auth)
        const id = await phoneProvider.verifyPhoneNumber(`${phoneNumber}`, recaptchaVerifier.current!)
        setVerificationId(id)
        Alert.alert("Alerte", "Un code vous a été envoyé par SMS!");

      } catch (error: any) {
        if (error.code === 'auth/too-many-requests') {
          Alert.alert("Erreur", "Trop de tentatives. Veuillez réessayer plus tard.");
        } else {
          Alert.alert(`Erreur lors de l'envoi du code: ${error.message}`);
        }
      }
    }
    sentVerificationCode();
  }, [phoneNumber])

  const resendCode = async () => {

    try {
      setSecondes(30);
      setRenvoyer(true);
      const phoneProvider = new PhoneAuthProvider(auth);
      const id = await phoneProvider.verifyPhoneNumber(`${phoneNumber}`, recaptchaVerifier.current!)
      setVerificationId(id);
      Alert.alert("Alerte", "Un nouveau code vous a été renvoyé!");
    } catch (error: any) {
      if (error.code === 'auth/too-many-requests') {
        Alert.alert("Erreur", "Trop de tentatives. Veuillez réessayer plus tard.");
      } else {
        Alert.alert("Erreur", `Erreur lors de la réexpédition du code: ${error.message}`);
      }

    }

  };

  const confirmCode = async () => {
    try {
      setLoading(true); // Démarrer le chargement
      if (verificationId) {
        const credential = PhoneAuthProvider.credential(verificationId, codeVerification);
        await signInWithCredential(auth, credential);
        navigation.navigate('NewPassword');
      }
    } catch (error: any) {

      Alert.alert("Une erreur lors de la confirmation", error.message);
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };


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

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
        />
        <Back />
        <Text style={{ fontSize: 25, marginTop: '5%' }}>Un code à six chiffres vous a été envoyé au : {phoneNumber}</Text>

        <OtpInput
          numberOfDigits={6}

          focusColor="green"
          focusStickBlinkingDuration={400}
          onFilled={(text) => setCodeVerification(text)}
          textInputProps={{ accessibilityLabel: "One-Time-Password", }}
          theme={{
            inputsContainerStyle: styles.inputsContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
          }}
        />
        <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 15 }}> vous pourriez demander un nouveau code dans :</Text>
        <Text style={styles.secondes}>{décomptage(secondes)} </Text>

        <View style={{ marginTop: 40, width: '45%', alignSelf: 'center', }}>
          <Button title="Renvoyer un code" color="#088A4B" onPress={resendCode} disabled={renvoyer} />
        </View>

        <TouchableOpacity style={styles.vérifier} onPress={confirmCode} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>VÉRIFIER</Text>
          )}
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: '1%',
  },
  secondes: {
    fontSize: 25,
    width: '26%',
    height: '6%',
    borderWidth: 1,
    borderColor: '#088A4B',
    borderRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    padding: '2%',
    alignSelf: 'center',

  },
  vérifier: {
    backgroundColor: '#088A4B',
    borderRadius: 10,
    marginTop: '35%',
    width: '30%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputsContainer: {
    marginTop: '8%',
    width: '95%',
    alignSelf: 'center',
    height: '10%',
    alignItems: 'center',
  },
  pinCodeContainer: {
    width: '16%',
    alignSelf: 'center',
    height: '75%',
    borderWidth: 2,
    borderColor: '#777777',
  },

});

export default OtpSignIn;