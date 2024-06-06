import React, { useState, version } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from '@/authentification/firstPage';
import Ouverture from '@/authentification/ouverture';
import Inscription from '@/authentification/inscription';
import Connexion from '@/authentification/connexion';
import OTP from '@/authentification/codeOTP';
import Vérification from '@/authentification/verifNumber';
import NewPassword from '@/authentification/newpassword';
import Map from '@/authentification/map';
import Login from "@/homePage/login";
import  Firstmenu  from '@/homePage/firstmenu';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';
import Commander from '@/homePage/choiceVehicule';
import App from '@/authentification/test';

export default function app() {

  const Stack = createNativeStackNavigator()

  return (

     <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='First'>
    <Stack.Screen name='First' component={First} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Ouverture' component={Ouverture} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Connexion' component={Connexion} options={{ headerTransparent: false, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Inscription' component={Inscription} options={{ headerTransparent: true, headerShown: false }} />
        <Stack.Screen name='Vérification' component={Vérification} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='OTP' component={OTP} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerTransparent: false, headerShown: false }} />
      <Stack.Screen name="Login"  component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Firstmenu" component={Firstmenu} />
        <Stack.Screen name="Compte" component={Compte} />
        <Stack.Screen name="Motdepasse" component={Motdepasse} />
        <Stack.Screen name="Nouveaumotdepasse" component={Nouveaumotdepasse} />
        <Stack.Screen name="Securite" component={Securite} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Parametres" component={Parametres} />
        <Stack.Screen name="Langue" component={Langue} />
    </Stack.Navigator>
    </NavigationContainer> 







    //<Map/>
    // <Commander/>
   
    

 


  );

  };
  
  

