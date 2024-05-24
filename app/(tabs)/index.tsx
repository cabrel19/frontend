import React, { useState, version } from 'react';
import { Text} from 'react-native';

import Inscription from '@/authentification/inscription';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import verifNumber from '@/authentification/verifNumber';
import authentification from '@/authentification/authentification';
import Connexion from '@/authentification/connexion';
import Home from '@/homePage/home';

export default function app() {

 const Stack = createNativeStackNavigator()

 return (

    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='authentification'>
          <Stack.Screen name='Authentification' component={authentification} options={{headerTransparent: true,headerShown: false}}/>
          <Stack.Screen name='Connexion' component={Connexion} options={{headerTransparent: true,headerShown: true}} />
          <Stack.Screen name='Inscription' component={Inscription} options={{headerTransparent: true,headerShown: true}} />
          <Stack.Screen name='Verification' component={verifNumber} options={{headerTransparent: true,headerShown: true}}/>
          <Stack.Screen name='Home' component={Home} options={{headerTransparent: true,headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
  
};
