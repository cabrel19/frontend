import React, { useState, version } from 'react';
import { View, Text,Image,Button, TextInput,StyleSheet,} from 'react-native';

import Inscription from '@/screens/inscription';
import VerificationCodeInput from '@/screens/verifNumber';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import verifNumber from '@/screens/verifNumber';
import authentification from '@/screens/authentification';


export default function app() {

const Stack = createNativeStackNavigator()

 return (

<NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='authentification'>
        <Stack.Screen name='Authentification' component={authentification} options={{headerShown: false}}/>
        <Stack.Screen name='Inscription' component={Inscription} options={{headerShown: true}} />
        <Stack.Screen name='Verification' component={verifNumber} options={{headerShown: true}}/>
    </Stack.Navigator>
</NavigationContainer>

)
  
};