import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, ImageBackground, Alert, KeyboardAvoidingView,
  StyleSheet, TouchableOpacity,
  ScrollView
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons';
import Ou from '@/components/ou';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface props { onChangeText : any }

const validationSchema = z.object({
  phone: z.string().min(9, 'Numero incorrect').max(9, 'Numero incorrect'),
  name: z.string().min(1, 'Champ vide'),
  password: z.string().min(8, 'Au moins 08 caractères '),
});

const Inscription = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const phoneInput = useRef(null);
  const [showPassword, setShowPassword] = useState(false);//masquer le password par default
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale

  type FormData = z.infer<typeof validationSchema>

  const { handleSubmit, control,watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }//vérifier si le numero est valide
    navigation.navigate('OTP', { phoneNumber, name,password });
  };

  const allFieldsFilled = watch(['name', 'phone', 'password']).every(field => field);


  const toggleShowPassword = () => {
    // masquer ou afficher le mot de passe
    setShowPassword(!showPassword);
  };

  return (

    <ImageBackground
      source={require('@/assets/images/inscription.png')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={'padding'}
        style={styles.keyboardAvoidingView} >


        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View style={styles.formulaire}>
          <Controller name="name"
              control={control}
              render={({ field: { onChange,value } }) => (
            <TextInput
              style={styles.name}
              value={value}
              onChangeText={onChange}
              placeholder="Entrez votre nom"
              keyboardType="web-search"
              autoCorrect={false}
            />
          )}
          />
          {errors.name && <Text style={{color:'red', textAlign:'center'}}>{errors.name.message}</Text>}

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
            {errors.phone && <Text style={{color:'red', textAlign:'center'}}>{errors.phone.message}</Text>}

            <Controller name="password"
              control={control}
              render={({ field: { onChange,value } }) => (
            <View style={styles.Password}>
              <TextInput
                style={styles.enterPassword}
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
                placeholder="Créer un mot de passe"
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
            )}
            />
            {errors.password && <Text style={{color:'red', textAlign:'center'}}>{errors.password.message}</Text>}

            <TouchableOpacity style={[styles.inscrire, allFieldsFilled ? styles.buttonEnabled :styles.buttonDisabled]} disabled={!allFieldsFilled} onPress={handleSubmit(onSubmit)}>

              <Text style={{ color: '#fff', fontSize: 20 }}>S'inscrire</Text>
            </TouchableOpacity>


            <Ou />

            <View style={styles.footer}>
              <Text style={styles.haveAccount}>
                Vous avez deja un compte?
              </Text>
              <TouchableOpacity style={styles.seConnecter} onPress={() => navigation.navigate("Connexion")} >
                <Text style={{ color: '#088A4B' }}>    Se connecter</Text>
              </TouchableOpacity>

            </View>
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
    height: '55%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: '3%'
  },
  name: {
    width: "90%",
    marginTop: '4%',
    height: '15%',
    borderWidth: 1,
    borderColor: '#088A4B',
    borderRadius: 15,
    padding: '3%',
    alignSelf: 'center',
    fontSize: 20,
  },
  PhoneInput: {
    borderWidth: 1,
    borderRadius: 15,
    height: '16%',
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

  Password: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    height: '15%',
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
  inscrire: {
    backgroundColor: '#088A4B',
    opacity: 93,
    borderRadius: 10,
    marginTop: '4%',
    alignItems: 'center',
    width: '40%',
    height: '13%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonEnabled:{
    backgroundColor: '#088A4B',
  },
  buttonDisabled:{
    backgroundColor: '#d3d3d3',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
    flexDirection: 'row',
    height: '10%',
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

export default Inscription;