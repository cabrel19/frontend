import React, { useState, version } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from '@/authentification/firstPage';
import Ouverture from '@/authentification/ouverture';
import Inscription from '@/authentification/inscription';
import Connexion from '@/authentification/connexion';
import OtpSignUp from '@/authentification/codeInscription';
import OtpSignIn from '@/authentification/codeConnexion';
import Vérification from '@/authentification/verifNumber';
import NewPassword from '@/authentification/newpassword';
import Map from '@/authentification/map';
import Home from "@/homePage/home";
import Firstmenu from '@/homePage/firstmenu';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';
import Commander from '@/homePage/choiceVehicule';
import Offres from '@/homePage/offres';
import Chauffeur from '@/homePage/profilChaufeur';
import DestinationLIV from '@/homePage/destinationLivraison';
import Notification from '@/homePage/notification';

export default function app() {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='First'>
        <Stack.Screen name='First' component={First} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Ouverture' component={Ouverture} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Connexion' component={Connexion} options={{ headerTransparent: false, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Inscription' component={Inscription} options={{ headerTransparent: true, headerShown: false,gestureEnabled: false  }} />
        <Stack.Screen name='Vérification' component={Vérification} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='OtpSignUp' component={OtpSignUp} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='OtpSignIn' component={OtpSignIn} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerTransparent: false, headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Firstmenu" component={Firstmenu} options={{ headerShown: false }} />
        <Stack.Screen name="Compte" component={Compte} options={{ headerShown: false }} />
        <Stack.Screen name="Motdepasse" component={Motdepasse} options={{ headerShown: false }} />
        <Stack.Screen name="Nouveaumotdepasse" component={Nouveaumotdepasse} />
        <Stack.Screen name="Securite" component={Securite} options={{ headerShown: false }} />
        <Stack.Screen name="Information" component={Information} options={{ headerShown: false }} />
        <Stack.Screen name="Parametres" component={Parametres} options={{ headerShown: false }} />
        <Stack.Screen name="Langue" component={Langue} options={{ headerShown: false }} />
        <Stack.Screen name="Commander" component={Commander} options={{ headerShown: false }} />
        <Stack.Screen name="Offres" component={Offres} options={{ headerShown: false }} />
        <Stack.Screen name="Chauffeur" component={Chauffeur} options={{ headerShown: false }} />
        <Stack.Screen name="DestinationLIV" component={DestinationLIV} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>


  );

};



