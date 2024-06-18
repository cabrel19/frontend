import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Keyboard } from "react-native";
import PropTypes from 'prop-types';


const BarreRecherche=({onPress})=>{

//export function BarreRecherche(navigation:any) {
  return (

    <KeyboardAvoidingView behavior={"padding"} style={{justifyContent:'flex-end'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="votre destination" 
        styles={{
          height: 71,
          borderWidth: 0,
          borderColor: "#088A4B",
          borderRadius: 10,
          fontSize: 16,
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,

          listView: {
            //backgroundColor: "",
            position: "absolute",
            top: 50,
            borderRadius: 5,
            flex: 1,
            elevation: 8, // for Android
            zIndex: 1080, // for iOS
            width: '100%',
          },
        }}
        onPress={onPress}
        query={{
          key: "AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k",
          language: "en",
        }}
        listViewDisplayed='auto'


      />

      <TouchableOpacity style={styles.icon}>
        <Ionicons name="search" size={24} color="#088A4B" />
      </TouchableOpacity>
    </View>

    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
 
BarreRecherche.propTypes={
  onPress: PropTypes.func.isRequired, 
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: "#088A4B",
    height: 51,
    width: 380,
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
  },
});

export default BarreRecherche;