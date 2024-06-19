import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ViewBase, Alert } from 'react-native';




const Information = ({ navigation }: any) => {


    return(

<View style={styles.container} >

    <View style={styles.header} >

    </View>

    <View>
        <Text style={{fontWeight: '500', fontSize: 30, margin: 14}}>
            Informations
        </Text>
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
  
    },

    header: {
        width: '100%',
        height: '30%',
        backgroundColor: '#088A4B'
    },
    line: {
         borderBottomWidth: 1,
         borderBottomColor: "#E0E0E0",
         width: "82%",
        
            
        },
})


export default Information;