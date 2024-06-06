import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/6.png")}
        style={{ flex: 1 ,justifyContent:'flex-end'}}
      >
        <View style={styles.footer}>
          <TouchableOpacity
            style={{ marginRight: 30 }}
            onPress={() => navigation.navigate("Firstmenu")}
          >
            <View>
              <Ionicons name="menu" size={50} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.course}
            onPress={() => Alert.alert("")}
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },

  footer: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 30,
    marginBottom:10,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    backgroundColor: "#a9a9a9",
    alignSelf: "center",
  },
  course: {
    padding: 15,
    borderRadius: 10,
    height: 50,
    width: 147,
  },

  livraison: {
    padding: 15,
    borderRadius: 10,
    height: 50,
    width: 147,
  },
});
export default Login;
