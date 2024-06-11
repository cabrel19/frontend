import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export function BarreRecherche() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="ou allez-vous?"
        styles={{
          height: 51,
          borderWidth: 0,
          borderColor: "#088A4B",
          borderRadius: 10,
          fontSize: 20,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,

          listView: {
            //backgroundColor: "blue",
            position: "absolute",
            top: 30,
            marginTop:35,
            borderRadius: 5,
            flex: 1,
            elevation: 8, // for Android
            zIndex: 1080, // for iOS
          },
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k",
          language: "en",
        }}
        listViewDisplayed='auto'

      />

      <TouchableOpacity style={styles.icon}>
        <Ionicons name="search" size={22} color="#088A4B" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: "#088A4B",
    height: 50,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 10,
    flexDirection: "row",
    margin: 10,
  },

  icon: {
    width: "10%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'red'
  },
});
