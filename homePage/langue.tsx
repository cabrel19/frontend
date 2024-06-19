import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ViewBase, Alert, Image } from 'react-native';




const Langue = ({ navigation }: any) => {


    return(

        <View style={styles.container}>
            <View style={{
        marginTop: 20,
        marginLeft: 35,
        height: 30,
        width: "98%",


    }}>
          <TouchableOpacity  onPress={() => Alert.alert("")}  style={{  flexDirection: 'row',
        justifyContent: "flex-start", alignItems: 'center'}}>
          <Image
            source={require("@/assets/images/8.png")}
            style={{ width: 25, height: 25, }}
          />
          <Text style={{fontSize: 16, marginLeft:16}}>Anglais</Text>

          </TouchableOpacity>
          <View style={styles.line} />
          </View>
          <View style={{
       
        marginTop: 40,
        marginLeft: 35,
        height: 60,
        width: "98%",
    }}>
          <TouchableOpacity onPress={() =>Alert.alert("")}   style={{  flexDirection: 'row',
        justifyContent: "flex-start", alignItems: 'center'}}>
          <Image
            source={require("@/assets/images/9.png")}
            style={{ width: 25, height: 25, }}
          />
          <Text style={{fontSize: 16, marginLeft:26}}>Francais</Text>
          </TouchableOpacity>
          </View>
          </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: '38%',
        marginTop: 10,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        width: "80%",
        marginTop: 20,
        marginLeft: 15,  
           
       },
    })

export default Langue;