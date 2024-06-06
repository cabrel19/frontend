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
import Home from '@/homePage/home';
import Map from '@/authentification/map';



import Commander from '@/homePage/choiceVehicule';
import App from '@/authentification/test';

export default function app() {

  const Stack = createNativeStackNavigator()

  return (

    //  <NavigationContainer independent={true}>
    //   <Stack.Navigator initialRouteName='First'>
    // <Stack.Screen name='First' component={First} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
    //     <Stack.Screen name='Ouverture' component={Ouverture} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
    //     <Stack.Screen name='Connexion' component={Connexion} options={{ headerTransparent: false, headerShown: false, gestureEnabled: false }} />
    //     <Stack.Screen name='Inscription' component={Inscription} options={{ headerTransparent: true, headerShown: false }} />
    //     <Stack.Screen name='Vérification' component={Vérification} options={{ headerTransparent: false, headerShown: false }} />
    //     <Stack.Screen name='Home' component={Home} options={{ headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='OTP' component={OTP} options={{ headerTransparent: false, headerShown: false }} />
    //     <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerTransparent: false, headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer> 

    //<Map/>
    <Commander/>
   
    

  );

};
