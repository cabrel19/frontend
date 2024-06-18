import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ViewBase, Alert } from 'react-native';
import Back from "@/components/btnBack";



const Information = ({ navigation }: any) => {


    return(

<View style={styles.container} >

<View style={styles.header}>

<Back />
<Text style={styles.title}>Informations</Text>

</View>

    <View style={{
        marginTop: 10,
        marginLeft: 35,
        height: 30,
        width: "98%",
    }}>
          <TouchableOpacity onPress={() => Alert.alert("")}>
          <Text style={{fontSize: 16}}>Nos tarifs</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" style={{ top: -16,   left: 340}} />
          </TouchableOpacity>
          <View style={styles.line} />
          </View>
          <View style={{
       
        marginTop: 30,
        marginLeft: 35,
        height: 60,
        width: "98%",
    }}>
          <TouchableOpacity onPress={() =>Alert.alert("")}>
          <Text style={{fontSize: 16}}>Nos partenaires</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color="rgba(119, 119, 119, 1)" style={{ top: -16,   left: 340}} />
          </TouchableOpacity>

          </View>
</View>
        
    )
};

const styles = StyleSheet.create({
    container: {
  flex:1,
  width:'100%',
  height:'100%',
    },

    header: {
        width: '100%',
        height: '15%',
        padding: '2%',
        backgroundColor: '#088A4B',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        // marginTop:'10%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        marginLeft: '15%',
        marginBottom: '2%',
        fontSize: 20,
    },
    line: {
         borderBottomWidth: 1,
         borderBottomColor: "#E0E0E0",
         width: "82%",
        
            
        },
})


export default Information;