import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, ImageBackground, TextInput, StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, Alert, ScrollView
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons';
import Ou from '@/components/ou';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface props { onChangeText : any }

const Connexion = ({ navigation }: any) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);//masquer le password par default
  const [buttonColor, setButtonColor] = useState('#d3d3d3'); // Couleur grise initiale
  const phoneInput = useRef(null);

  const validationSchema = z.object({
    phone: z.string().min(9, 'Numero incorrect').max(9, 'Numero incorrect'),
    password: z.string().min(8, 'Au moins 08 caractères '),
  });

  type FormData = z.infer<typeof validationSchema>

  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (!isValid) {
      Alert.alert('Erreur', 'Le numéro de téléphone est invalide');
      return;
    }//vérifier si le numero est valide
    navigation.navigate('Home');
  };

  const toggleShowPassword = () => {
    // masquer ou afficher le mot de passe
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Changer la couleur du bouton en vert si tout les champs sont correctement remplis, sinon gris
    if (phoneNumber.trim().length === 13 && password.trim().length > 7) {
      setButtonColor('#088A4B'); // Couleur verte
    } else {
      setButtonColor('#d3d3d3'); // Couleur grise
    }
  }, [phoneNumber, password]);

  return (

    <ImageBackground
      source={require('@/assets/images/connexion.png')}
      style={styles.background}
    >

      <KeyboardAvoidingView
        behavior={'padding'}
        style={styles.keyboardAvoidingView} >


        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.formulaire}>

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

            <TouchableOpacity style={styles.forgetPassword} onPress={() => navigation.navigate("Vérification")}>
              <Text style={{ color: '#088A4B', fontSize: 16 }}>Mot de passe oublier ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.connecter, backgroundColor: buttonColor }} onPress={handleSubmit(onSubmit)}>
              <Text style={{ color: '#fff', fontSize: 20, }}>Se connecter</Text>
            </TouchableOpacity>


            <Ou />

            <View style={styles.footer}>
              <Text style={styles.notAccount}>
                Vous n'avez pas de compte?
              </Text>
              <TouchableOpacity style={styles.inscrire} onPress={() => navigation.navigate("Inscription")}>
                <Text style={styles.textInscrire}>S'inscrire</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>



      </KeyboardAvoidingView >

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
    marginBottom: '10%',
    height: '50%',
    borderRadius: 15,
    overflow: 'hidden',
    padding: '3%'
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
  forgetPassword: {
    width: '55%',
    height: '6%',
    marginLeft: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  connecter: {
    backgroundColor: '#088A4B',
    borderRadius: 10,
    marginTop: '7%',
    alignItems: 'center',
    width: '40%',
    height: '14%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  footer: {
    alignItems: 'center',
    marginTop: '5%',
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  notAccount: {
    fontSize: 16,
    width: '75%',
  },
  inscrire: {
    width: '25%',
  },
  textInscrire: {
    color: '#088A4B',
  },
});
export default Connexion;