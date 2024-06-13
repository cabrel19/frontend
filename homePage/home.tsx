import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";


const Home = ({ navigation }: any) => {

  const data = useState('');
    const regionInitiale = {
        latitude: 4.0651,
        longitude: 9.7584,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    const coordinates = [
        { latitude: 4.0621, longitude: 9.7369 },
    ];
  return (
    
    <View style={styles.container}>
         <MapView 
                initialRegion={regionInitiale}
                style={StyleSheet.absoluteFillObject}  >
                <Marker
                    coordinate={coordinates[0]}
                    title={"Ma position >"}
                    description={"Départ"}
                    pinColor={"green"}
                />
          </MapView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={{ marginRight: 30 }}
            onPress={() => navigation.navigate("Firstmenu")}
          >
            <View style={styles.icons}>
              <Ionicons name="menu" size={40} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.course}
            onPress={() => navigation.navigate("Destination")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>COURSE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.livraison}
            onPress={() => Alert.alert("")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              LIVRAISON
            </Text>
          </TouchableOpacity>
        </View>
      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1,
    position : 'relative'
  },
  // 
  icons: {
    justifyContent:'center',
    alignItems:'center',
  },

  footer: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 30, 
    alignItems: "center",
    justifyContent: 'flex-end',
    height: 80,
    backgroundColor: "#a9a9a9",
    alignSelf: "center",
    position: 'absolute',
    bottom: 10
  },
  course: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    height: 50,
    width: 147,
  },

  livraison: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    height: 50,
    width: 147,
  },
});
export default Home;
