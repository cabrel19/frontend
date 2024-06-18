import React, { useState, version } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

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
import ReglageClient from '@/homePage/reglageClient';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';
import Commander from '@/homePage/choiceVehicule';
import Offres from '@/homePage/offres';
import SuggestionChauffeur from '@/homePage/suggestionChauffeur';
import Chauffeur from '@/homePage/profilChaufeur';
import DestinationLIV from '@/homePage/destinationLivraison';
import Notification from '@/homePage/notification';
import HomeChauffeur from '@/homePageChauffeur/home';
import Client from '@/homePageChauffeur/profilClient';
import Reglage from '@/homePageChauffeur/reglageChauffeur';
import CompteChauffeur from '@/homePageChauffeur/compteChauffeur';
import AideSupport from '@/homePageChauffeur/aideEtSupport';
import NotificationChauffeur from '@/homePageChauffeur/notificationChauffeur';
import HistoriqueChauffeur from '@/homePageChauffeur/historiqueChauffeur';
import ProposChauffeur from '@/homePageChauffeur/proposChauffeur';


//import Test from '@/authentification/test';
//import Test2 from '@/authentification/test2';

export default function app() {

  const Stack = createNativeStackNavigator();


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
        <Stack.Screen name="Home" component={Home} options={{presentation:'fullScreenModal' ,gestureEnabled: false, headerShown: false }} />
        <Stack.Screen name="ReglageClient" component={ReglageClient} options={{presentation:'fullScreenModal', headerShown: false}} />
        <Stack.Screen name="Compte" component={Compte} options={{presentation:'fullScreenModal', headerShown: false,gestureEnabled: true }} />
        <Stack.Screen name="Motdepasse" component={Motdepasse} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Nouveaumotdepasse" component={Nouveaumotdepasse} />
        <Stack.Screen name="Securite" component={Securite} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Information" component={Information} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Parametres" component={Parametres} options={{presentation:'fullScreenModal',headerShown: false }} />
        <Stack.Screen name="Langue" component={Langue} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Commander" component={Commander} options={{presentation:'fullScreenModal', headerShown: false }} />
         <Stack.Screen name="SuggestionChauffeur" component={SuggestionChauffeur} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Offres" component={Offres} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Chauffeur" component={Chauffeur} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="DestinationLIV" component={DestinationLIV} options={{presentation:'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{presentation:'fullScreenModal', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer independent={true}>
    //   <Stack.Navigator initialRouteName='HomeChauffeur'>
    //     <Stack.Screen name='HomeChauffeur' component={HomeChauffeur} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, gestureEnabled: false }} />
    //     <Stack.Screen name='Client' component={Client} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='Reglage' component={Reglage} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='CompteChauffeur' component={CompteChauffeur} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='AideSupport' component={AideSupport} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='NotificationChauffeur' component={NotificationChauffeur} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='HistoriqueChauffeur' component={HistoriqueChauffeur} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //     <Stack.Screen name='ProposChauffeur' component={ProposChauffeur} options={{presentation:'fullScreenModal', headerTransparent: true, headerShown: false, }} />
    //   </Stack.Navigator>
    // </NavigationContainer>

   // <Chauffeur/>
    //<Test/>
    //<Test2/>
    //<HomeChauffeur/>
    //<SuggestionChauffeur/>
    //<Client/>
    //<HistoriqueChauffeur/>
    //<ReglageClient/>
  );



};