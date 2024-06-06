import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "@/homePage/login";
import  Firstmenu  from '@/homePage/firstmenu';
import Compte from '@/homePage/compte';
import Motdepasse from '@/homePage/motdepasse';
import Nouveaumotdepasse from '@/homePage/nouveaumotdepasse';
import Securite from '@/homePage/securite';
import Information from '@/homePage/information';
import Parametres from '@/homePage/parametres';
import Langue from '@/homePage/langue';


export default function HomeScreen(){


  const Stack = createNativeStackNavigator();

// const MyStack = () => {
  return(
    
 <NavigationContainer independent={true} >
  
      <Stack.Navigator initialRouteName='login'>

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
 
    //<Login />
    
  );
  };
  
  