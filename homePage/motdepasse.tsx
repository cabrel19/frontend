import { StyleSheet, Text, TouchableOpacity, View, Alert, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import Back from "@/components/btnBack";
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase.config';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAuth } from "firebase/auth";



const Motdepasse = ({ navigation }: any) => {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = z.object({
    password: z.string().min(8, 'Au moins 08 caractères'),
  });

  type FormData = z.infer<typeof validationSchema>;

  const { handleSubmit, watch, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async () => {
    const user = getAuth().currentUser;
    if (user) {
      await getDoc(doc(firestore, "users", user.uid));
      where("password", "==", password)
      navigation.navigate("Nouveaumotdepasse");
    } else {
      Alert.alert("Erreur", "Mot de passe incorrect");
    }
  };

  

  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ justifyContent: 'flex-end' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={{ fontSize: 18, color: 'black' }}>Back</Text>
        </TouchableOpacity>
          <View style={styles.header}>
            <Image
              source={require("@/assets/images/5.png")}
              style={{ margin: 45 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, textAlign: "center", marginTop: 22 }}>
              Saisissez votre mot de passe actuel
            </Text>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={styles.Password}>
                  <TextInput
                    style={styles.enterPassword}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                    placeholder="Mot de passe"
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
            {errors.password && <Text style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.forgetPwd}>
              <Text  style={{color: "#088A4B", fontSize: 18, }} > Mot de passe oublier ? </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.suivant}>
              <Text style={{ color: "white", textAlign: "center" }}>SUIVANT</Text>
            </TouchableOpacity>

          </View>

          </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "center",
  },

  header: {
    width: 425,
    height: 379,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  back: {
    alignSelf: 'flex-start',
     alignItems: 'center',
     width: 70,
     flexDirection: 'row',
     marginTop:'70%',
     marginLeft:'3%',
    // backgroundColor:'red'
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
  forgetPwd: {
    width: '49%',
    height: '5%',
    alignSelf: 'center',
    backgroundColor: 'blue',
    marginTop: '4%',
    alignItems:'center',
    justifyContent:'center',

  },
  suivant: {
    alignSelf: 'center',
    marginTop: 135,
    backgroundColor: "#088A4B",
    padding: 15,
    borderRadius: 10,
    height: 47,
    width: 140,
  },
  footer: {},
});

export default Motdepasse;
