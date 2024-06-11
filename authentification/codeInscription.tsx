import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, StyleSheet,
  Alert, Keyboard
} from 'react-native';
import Back from '@/components/btnBack';
import { app, auth,PhoneAuthProvider, RecaptchaVerifier } from '@/firebase.config';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const OtpSignUp = ({ route, navigation }: any) => {
  const {confirmation, phoneNumber, name,password } = route.params;
  const [code, setCode] = useState(['', '', '', '', '']);
  const [verificationId, setVerificationId]= useState("")
  const [renvoyer, setRenvoyer] = useState(true);
  const [secondes, setSecondes] = useState(10);// décomptage de 10 sec par default
  const [error, setError] = useState("")
  const recaptchaVerifier= useRef(null)
  const inputRef = useRef([]);
  
// useEffect(() => {
//   const sentVerificationCode = async()=>{
//     try {
//       const phoneProvider = new PhoneAuthProvider(auth)
//       const id = await phoneProvider.verifyPhoneNumber(`+237${phoneNumber}`, RecaptchaVerifier.current!)
//       setVerificationId(id)
//       //setCode(true)
//       Alert.alert("Succès", "Le code a été envoyé avec succès !");
  
//     } catch (error:any) {
//       console.error("Erreur lors de l'envoi du code:", error);
//       setError(error.message);
//       Alert.alert(
//         "Erreur",
//         `Erreur lors de l'envoi du code: ${error.message}`
//       );

//     }
//   }
//   sentVerificationCode()

// }, [phoneNumber])

const handleChange = (text, index) => {
  //aller automatiquement a la case suivante lorsque la précédente est remplie
  const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  if (text.length === 1 && index < 4) {
    inputRef.current[index + 1].focus();
  }
};

const verifyCode = () => {
  // vérifier si le code entrer est correct et naviguer a la page d'accueil
   if (code.join('') === '12345') { 
     Alert.alert('Succès', 'Le code est valide');
     return(navigation.replace("Home"));
   } else {
     Alert.alert('Erreur', 'Le code est invalide');
     return;
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

  const resendCode = () => {
    // l'appuie sur le bouton relance le décomptage et désactive le bouton
    setSecondes(10);
    setRenvoyer(true);
    Alert.alert('Info', 'Un nouveau code a été renvoyer');

  };






return (

  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>

      <Back />
      <Text style={{ fontSize: 25, marginTop: 25 }}>Un code à cinq chiffres vous a été envoyé au : {phoneNumber}</Text>
      <View style={styles.codeContainer}>
      {code.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            ref={(ref) => inputRef.current[index] = ref}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={text => handleChange(text, index)}
              />
        
        ))}
      </View>
      <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 15 }}> vous pourriez demander un nouveau code dans :</Text>
      <Text style={styles.secondes}>{décomptage(secondes)} </Text>

      <View style={{ marginTop: 40 }}>
        <Button title="Renvoyer un code" color="#088A4B" onPress={resendCode} disabled={renvoyer} />
      </View>

      <TouchableOpacity style={styles.vérifier} onPress={verifyCode}>
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
});

export default OtpSignUp;