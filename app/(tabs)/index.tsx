import Acceuil from "@/authentification/acceuil";
import React from "react";
import { View, StyleSheet } from 'react-native';

export default function APP()
{
  return(
    <View style={styles.container }>
        <Acceuil/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  }
})