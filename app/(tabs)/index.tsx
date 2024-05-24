import { Image, StyleSheet,Text, Platform, SafeAreaView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback  } from 'react-native';
import React from 'react';
import { Logo } from '../../_components/Logo';
import { BarreRecherche } from '../../_components/BarreRecherche';
import { SecondVue } from '../../_components/SecondVue';
import { Boutton } from '../../_components/Boutton';


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
