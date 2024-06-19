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


//import Test2 from '@/authentification/test2';
import App from '@/authentification/test';
import { BarreRecherche } from '@/components/BarreRecherche';
import { View } from 'react-native';

export default function app() {

  //const Stack = createNativeStackNavigator()

  return (
    <View>
      <Map/>
</View>

  );

};


