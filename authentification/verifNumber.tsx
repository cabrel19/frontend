import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  View, Text, KeyboardAvoidingView, Alert,
  TouchableOpacity, ImageBackground,
  StyleSheet, ScrollView
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Back from "@/components/btnBack";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface props { onChangeText: any }

const Vérification = ({ navigation }: any) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale
  const phoneInput = useRef(null);


  const validationSchema = z.object({
    phone: z.string().min(9, 'Numero incorrect').max(9, 'Numero incorrect'),

  });

  type FormData = z.infer<typeof validationSchema>

  const { handleSubmit, control,watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const allFieldsFilled = watch(['phone']).every(field => field);

  const onSubmit = (data: FormData) => {
    console.log(data);
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      //vérifier si le numero est valide
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }
    navigation.navigate('NewPassword');
  };

  useEffect(() => {
    // Changer la couleur du bouton en vert si tous les champs sont remplis, sinon gris
    if (phoneNumber.trim().length === 13) {
      setButtonColor('#088A4B');
    } else {
      setButtonColor('#d3d3d3');
    }
  }, [phoneNumber]);




  return (

    <ImageBackground
      source={require('@/assets/images/forget.png')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={'padding'}
        style={styles.keyboardAvoidingView} >

        <Back />

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.formulaire}>

            <Text style={styles.text}>Veuillez Entrer votre Numero de Telephone :</Text>

            <Controller name="phone"
              control={control}
              render={({ field: { onChange } }) => (
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={phoneNumber}
                  defaultCode="CM"
                  layout="first"
                  onChangeText={onChange}
                  onChangeFormattedText={text => { setPhoneNumber(text); }}
                  containerStyle={styles.PhoneInput}
                  textContainerStyle={styles.textContainer}
                  textInputStyle={styles.enterNumber}
                  flagButtonStyle={styles.drapeau}
                  placeholder='Numero'
                />
              )}
            />
            {errors.phone && <Text style={{ color: 'red', textAlign: 'center' }}>{errors.phone.message}</Text>}

            <TouchableOpacity style={[styles.bouton, allFieldsFilled ? styles.buttonEnabled :styles.buttonDisabled]} disabled={!allFieldsFilled} onPress={handleSubmit(onSubmit)} >
              <Text style={{ color: "white", fontSize: 17, }}>VERIFIER</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

      </KeyboardAvoidingView>

    </ImageBackground>
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
    marginBottom: '22%',
    height: '40%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: '3%'
  },
  text: {
    width: "80%",
    height: 50,
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'InriaSans-Regular',
  },
  PhoneInput: {
    borderWidth: 1,
    borderRadius: 15,
    height: '18%',
    width: '90%',
    marginTop: '4%',
    borderColor: '#088A4B',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  textContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: "95%",
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  enterNumber: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: "100%",
    fontSize: 18
  },
  drapeau: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  bouton: {
    backgroundColor: '#088A4B',
    opacity: 93,
    borderRadius: 10,
    marginTop: '6%',
    alignItems: 'center',
    width: '40%',
    height: '15%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonEnabled:{
    backgroundColor: '#088A4B',
  },
  buttonDisabled:{
    backgroundColor: '#d3d3d3',
  },
});


export default Vérification;