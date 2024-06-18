
import React, { useState, version } from 'react';



import Home from "@/homePage/home";
import  Firstmenu  from '@/homePage/firstmenu';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from '@/authentification/firstPage';
import Ouverture from '@/authentification/ouverture';
import Inscription from '@/authentification/inscription';
import Connexion from '@/authentification/connexion';
import OtpSignUp from '@/authentification/codeOTP';
import Vérification from '@/authentification/verifNumber';
import NewPassword from '@/authentification/newpassword';
import Map from '@/authentification/map';
import Commander from '@/homePage/choiceVehicule';
import App from '@/authentification/test';
import Destination from '@/homePage/destination';
import { StyleSheet } from 'react-native';


export default function HomeScreen(){

  const Stack = createNativeStackNavigator()

  return (

       <NavigationContainer independent={true}>
       <Stack.Navigator initialRouteName='First'> 
     <Stack.Screen name='First' component={First} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
     <Stack.Screen name='Ouverture' component={Ouverture} options={{ headerTransparent: true, headerShown: false, gestureEnabled: false }} />
     <Stack.Screen name='Connexion' component={Connexion} options={{ headerTransparent: false, headerShown: false, gestureEnabled: false }} />
     <Stack.Screen name='Inscription' component={Inscription} options={{ headerTransparent: true, headerShown: false }} />
     <Stack.Screen name="Home"  component={Home} options={{headerShown:false, headerTransparent: true}}/>
     <Stack.Screen name="Firstmenu" component={Firstmenu} options={{headerShown: false}}/>
     <Stack.Screen name="Compte" component={Compte} options={{headerShown: false}}  />
     {/* <Stack.Screen name="Motdepasse" component={Motdepasse} options={{headerShown: false}}/>
     <Stack.Screen name="Nouveaumotdepasse" component={Nouveaumotdepasse} options={{headerShown: false}}/> */}
     <Stack.Screen name="Securite" component={Securite} options={{headerShown: false}}/>
     <Stack.Screen name="Information" component={Information} options={{headerShown: false}}/>
     <Stack.Screen name="Parametres" component={Parametres} options={{headerShown: false}} />
     <Stack.Screen name="Langue" component={Langue} options={{headerShown: false}}/>
     <Stack.Screen name='Vérification' component={Vérification} options={{ headerTransparent: false, headerShown: false }} />
     <Stack.Screen name='OTP' component={OtpSignUp} options={{ headerTransparent: false, headerShown: false }} />
     <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerTransparent: false, headerShown: false, presentation: 'fullScreenModal' }} />
     <Stack.Screen name='Destination'  component={Destination} options={{ headerTransparent: false, headerShown: false, presentation: 'fullScreenModal' }} />
     <Stack.Screen name='Commander'  component={Commander} options={{ headerTransparent: false, headerShown: false, presentation: 'fullScreenModal' }} />
     
        </Stack.Navigator> 
      </NavigationContainer> 


    //<Map/>
    //<Commander/>

//<Compte/>
    //<Destination/>
   
    //<Login />
    
  );
 
};

