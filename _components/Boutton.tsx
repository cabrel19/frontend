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
import Ionicons from "@expo/vector-icons/Ionicons";
export function Boutton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("")} style={styles.box}>
        <View style={styles.icon}>
          <Ionicons name="search" size={20} color="grey" />
        </View>

        <View
          style={{
            backgroundColor: "#088A4B",
            padding: 15,
            borderRadius: 10,
            height: 50,
            width: 147,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>LIVRAISON</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  box: {
    marginTop: 20,
    padding: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  icon: {
    flex: 1,
    
  },
  container: {
    marginTop: 12,
    padding: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
