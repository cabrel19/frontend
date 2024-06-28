import React, { useEffect, useState, version } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '@/firebase.config';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

import First from '@/authentification/firstPage';
import Ouverture from '@/authentification/ouverture';
import Statut from '@/authentification/statut';


import Inscription from '@/authentification/inscription';
import Connexion from '@/authentification/connexion';
import OtpSignUp from '@/authentification/codeInscription';
import OtpSignIn from '@/authentification/codeNewPassword';
import Vérification from '@/authentification/verifNumber';
import OtpAuthConnect from '@/authentification/otpAuthConnect';
import NewPassword from '@/authentification/newpassword';




import Home from "@/homePage/home";
import DestinationLIV from '@/homePage/destinationLivraison';
import ReglageClient from '@/homePage/reglageClient';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Apropos from '@/homePage/aPropos';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';
import Commander from '@/homePage/choiceVehicule';
import Offres from '@/homePage/offres';
import Notification from '@/homePage/notification';
import SuggestionChauffeur from '@/homePage/suggestionChauffeur';
import Chauffeur from '@/homePage/profilChaufeur';
import DestinationCourse from '@/homePage/destinationCourse';
import CommanderLIV from '@/homePage/choiceVehiculeLivraison';


import HomeChauffeur from '@/homePageChauffeur/home';
import Client from '@/homePageChauffeur/profilClient';
import Reglage from '@/homePageChauffeur/reglageChauffeur';
import CompteChauffeur from '@/homePageChauffeur/compteChauffeur';
import AideSupport from '@/homePageChauffeur/aideEtSupport';
import NotificationChauffeur from '@/homePageChauffeur/notificationChauffeur';
import HistoriqueChauffeur from '@/homePageChauffeur/historiqueChauffeur';
import ProposChauffeur from '@/homePageChauffeur/proposChauffeur';


import LocationUser from '@/components/positionUser';




// interface UserData {
//   name: string;
//   phone: string;
//   password:string;
  
// }




//import Map from '@/homePage/test';

const Stack = createNativeStackNavigator();

export default function app(navigation:any) {
  const [initialRoute, setInitialRoute] = useState('First');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        if (userLoggedIn === 'true') {
          setInitialRoute('Home');
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de la connexion de l\'utilisateur : ', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  if (loading) {
    return null; 
  }

  // const [userData, setUserData] = useState<UserData | null>(null);

  // useEffect(() => {
  //   const checkUserLoggedIn = async () => {
  //     try {
  //       const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
  //       if (userLoggedIn === 'true') {
  //       }
  //     } catch (error) {
  //       console.error('Erreur lors de la vérification de la connexion de l\'utilisateur : ', error);
  //     }
  //   };
  
  //   checkUserLoggedIn();
  //}, []);

  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='initialRoute'>


        <Stack.Screen name='First' component={First} options={{presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Ouverture' component={Ouverture} options={{presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Statut" component={Statut} options={{ presentation: 'fullScreenModal', headerShown: false }} />


        <Stack.Screen name='Connexion' component={Connexion} options={{presentation: 'fullScreenModal', headerTransparent: false, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Inscription' component={Inscription} options={{presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='Vérification' component={Vérification} options={{presentation: 'fullScreenModal', headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='OtpSignUp' component={OtpSignUp} options={{presentation: 'fullScreenModal', headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='OtpSignIn' component={OtpSignIn} options={{presentation: 'fullScreenModal', headerTransparent: false, headerShown: false }} />
        <Stack.Screen name='NewPassword' component={NewPassword} options={{presentation: 'fullScreenModal', headerTransparent: false, headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ presentation: 'fullScreenModal', gestureEnabled: false, headerShown: false }} />
        <Stack.Screen name="ReglageClient" component={ReglageClient} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Compte" component={Compte} options={{ presentation: 'fullScreenModal', headerShown: false, gestureEnabled: true }} />
        <Stack.Screen name="Motdepasse" component={Motdepasse} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="OtpAuthConnect" component={OtpAuthConnect} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Nouveaumotdepasse" component={Nouveaumotdepasse} options={{ presentation: 'fullScreenModal', headerShown: false }}/>
        <Stack.Screen name="Securite" component={Securite} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Information" component={Information} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Parametres" component={Parametres} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Apropos" component={Apropos} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Langue" component={Langue} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Commander" component={Commander} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="SuggestionChauffeur" component={SuggestionChauffeur} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Offres" component={Offres} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Chauffeur" component={Chauffeur} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="DestinationLIV" component={DestinationLIV} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="DestinationCourse" component={DestinationCourse} options={{ presentation: 'fullScreenModal', headerShown: false }} />
         <Stack.Screen name="CommanderLIV" component={CommanderLIV} options={{ presentation: 'fullScreenModal', headerShown: false }} />


        <Stack.Screen name='HomeChauffeur' component={HomeChauffeur} options={{  presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name='ProposChauffeur' component={ProposChauffeur} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='Client' component={Client} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='AideSupport' component={AideSupport} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='Reglage' component={Reglage} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='HistoriqueChauffeur' component={HistoriqueChauffeur} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='NotificationChauffeur' component={NotificationChauffeur} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />
        <Stack.Screen name='CompteChauffeur' component={CompteChauffeur} options={{ presentation: 'fullScreenModal', headerTransparent: true, headerShown: false, }} />


      </Stack.Navigator>
    </NavigationContainer>

//<HomeChauffeur/>

  );

};

