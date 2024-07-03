import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewBase, Alert, Image } from 'react-native';
import Back from '@/components/btnBack';




const Langue = ({ navigation }: any) => {


  return (

    <View style={styles.container}>

      <Back />

      <TouchableOpacity style={styles.langue} onPress={() => navigation.navigate("Langue")} >
        <Image source={require("@/assets/images/9.png")} style={{ width: 25, height: 25, }} />
        <Text style={{ fontSize: 18,marginLeft:'3%' }}>Français</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.langue} onPress={() => navigation.navigate("Langue")} >
        <Image source={require("@/assets/images/8.png")} style={{ width: 25, height: 25, }} />
        <Text style={{ fontSize: 18,marginLeft:'3%' }}>Anglais</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '38%',
    marginTop: '3%',
    backgroundColor:'#fafafa',
  },
  langue: {
    marginTop: '5%',
    alignSelf: 'center',
    alignItems: 'center',
    height: '8%',
    width: "90%",
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 2,
    shadowColor: '#eee',
    flexDirection: 'row',
    padding: '3%',
  },
 
})

export default Langue;