import React, { useState, version } from 'react';
import { View} from 'react-native';

import Inscription from '@/screens/inscription';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import verifNumber from '@/screens/verifNumber';
import authentification from '@/screens/authentification';
import Connexion from '@/screens/connexion';
import Home from '@/screens/home';
import Offres from '@/screens/offres';
import PartagerCode from '@/screens/partagerCode';




export default function app() {

const Stack = createNativeStackNavigator()

 return (

/*<NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='authentification'>
        <Stack.Screen name='Authentification' component={authentification} options={{headerTransparent: true,headerShown: false}}/>
        <Stack.Screen name='Connexion' component={Connexion} options={{headerTransparent: true,headerShown: true}} />
        <Stack.Screen name='Inscription' component={Inscription} options={{headerTransparent: true,headerShown: true}} />
        <Stack.Screen name='Verification' component={verifNumber} options={{headerTransparent: true,headerShown: true}}/>
        <Stack.Screen name='Home' component={Home} options={{headerTransparent: true,headerShown: false}}/>
    </Stack.Navigator>
</NavigationContainer>*/
<Offres/>

)
  
};