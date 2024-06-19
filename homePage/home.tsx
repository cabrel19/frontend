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


const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/fond1.jpeg")}
        style={styles.image}
      >
        <View style={styles.footer}>

            <TouchableOpacity
              style={styles.hamburger}
              onPress={() => navigation.navigate("Firstmenu")}
            >
              <Ionicons name="menu" size={45} color="white" />
            </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.course}
            onPress={() => navigation.navigate("Commander")}
          >
            <Text style={{ color: "white", textAlign: "center" }}>COURSE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.livraison}
            onPress={() => Alert.alert("")}
          >
            <Text style={{ color: "white"}}>
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
  width:'100%',
  height:'100%',
    flex: 1,
  },
image:{ 
  flex: 1, 
  justifyContent: 'flex-end' 
},
  footer: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 30,
    marginBottom: '3%',
    alignItems: "center",
    justifyContent: "center",
    height: '10%',
    backgroundColor: "#a9a9a9",
    alignSelf: "center",
  },
  hamburger:{
    width:'15%',
    height:'65%',
    alignItems:'center',
    justifyContent:'center',
    marginRight:'16%'
  },
  course: {
    justifyContent:'center',
    alignItems:'center',
    height: '65%',
    width: '22%',
    marginRight:'12%'
  },

  livraison: {
    justifyContent:'center',
    alignItems:'center',
    height: '65%',
    width: '27%',
  },
});
export default Home;
