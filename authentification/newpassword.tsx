import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ImageBackground, ScrollView, KeyboardAvoidingView, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Back from '@/components/btnBack';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth } from '@/firebase.config';
import { updatePassword } from 'firebase/auth';

const validationSchema = z.object({
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

const NewPassword = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(false); // masquer initialement
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // masquer initialement

  type FormData = z.infer<typeof validationSchema>

  const { handleSubmit, control, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const users = auth.currentUser;
      if (users) {
        await updatePassword(users, data.password);
        Alert.alert("Succès", "Le mot de passe a été mis à jour avec succès.");
        navigation.navigate('Connexion'); // Naviguer vers l'écran de connexion 
      } else {
        Alert.alert("Erreur", "Aucun utilisateur connecté.");
      }
    } catch (error) {
      Alert.alert("Erreur");
    }
  };


  const allFieldsFilled = watch(['password', 'confirmPassword']).every(field => field);


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

        <Back/>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View style={styles.formulaire}>



            <Text style={styles.text}>Créer un nouveau mot de passe</Text>

            <Controller name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.Password}>
                  <TextInput
                    style={styles.enterPassword}
                    placeholder="Mot de passe"
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                  />

                  <TouchableOpacity onPress={toggleShowPassword}>
                    <FontAwesome
                      name={showPassword ? 'eye-slash' : 'eye'}
                      size={20}
                      style={{ color: '#088A4B' }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.password && <Text style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</Text>}

            <Controller name="confirmPassword"
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.Password}>
                  <TextInput
                    style={styles.enterPassword}
                    placeholder="Confirmer le mot de passe"
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showConfirmPassword}
                  />

                  <TouchableOpacity onPress={toggleShowConfirmPassword}>
                    <FontAwesome
                      name={showConfirmPassword ? 'eye-slash' : 'eye'}
                      size={20}
                      style={{ color: '#088A4B' }}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.confirmPassword && <Text style={{ color: 'red', textAlign: 'center' }}>{errors.confirmPassword.message}</Text>}

            <TouchableOpacity
              style={[styles.valider, allFieldsFilled ? styles.buttonEnabled : styles.buttonDisabled]}
              disabled={!allFieldsFilled}
              onPress={handleSubmit(onSubmit)}
            >
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
    width: '80%'
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
  buttonEnabled: {
    backgroundColor: '#088A4B',
  },
  buttonDisabled: {
    backgroundColor: '#d3d3d3',
  },
});

export default NewPassword;