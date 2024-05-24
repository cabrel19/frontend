import { Image, StyleSheet,Text, Platform, SafeAreaView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback  } from 'react-native';
import React from 'react';
import { Logo } from '../../components/__tests__/Logo';
import { BarreRecherche } from '../../components/__tests__/BarreRecherche';
import { SecondVue } from '../../components/__tests__/SecondVue';
import { Boutton } from '../../components/__tests__/Boutton';


export default function HomeScreen() {
  return (
  <KeyboardAvoidingView 
  style={styles.container}>

    

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <SafeAreaView>
   <Logo />
   <BarreRecherche />
   <SecondVue />
   <Boutton />
  </SafeAreaView>
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
  }
  
  
});
