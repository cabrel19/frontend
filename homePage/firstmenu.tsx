import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Horizontal from "@/components/Horizontal";


//import {auth} from "@/firebase.config";

const Firstmenu = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Compte")}
        >
          <MaterialIcons
            name="account-circle"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Mon compte
          </Text>

          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("")}>
          <FontAwesome5
            name="history"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Historique de commandes
          </Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Information")}>
          <Ionicons
            name="information-circle"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Informations
          </Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Parametres") }>
          <MaterialIcons
            name="settings"
            size={22}
            color="#088A4B"
            style={{ margin: 10 }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Parametres
          </Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
         <TouchableOpacity style={styles.button} onPress={() => Alert.alert("")}> 
          <Ionicons
            name="notifications"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Notification
          </Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Securite")}
        >
          <MaterialIcons
            name="security"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Aide
          </Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" /> */}
        </TouchableOpacity>
        <Horizontal />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("")}>
        <MaterialIcons
            name="security"
            size={22}
            color="#088A4B"
            style={{ margin: 10, }}
  
          />
          <Text
            style={{
              color: "black",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            A propos
          </Text>
           {/* <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" />  */}
          
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
      <View style={{
       
      
       marginLeft: 35,
       height: 60,
       width: "98%",
   }}>
    <TouchableOpacity onPress={() =>Alert.alert("")}>
          <MaterialIcons name="logout" size={22}  color="#b22222"  style={{ top: 19, right:10}} />
          <Text style={{fontSize: 16, marginLeft:26, color: '#b22222'}}>Deconnexion</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#E0E0E0",
  },
  container2: {
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderRadius: 8,
  },
  container3: {
   height: '8%',
   backgroundColor: 'white',
   borderRadius: 8,
   width: "90%",
   justifyContent: 'flex-end',
  alignSelf: 'center',
  marginTop: 10,
  },

  button: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 6,
    height: 75,
    width: "90%",
    flexDirection: "row",
  },
});

export default Firstmenu;
