import React from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PropTypes from 'prop-types';

const BarreRecherche = ({ onPress }: any) => {

  return (

        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <View style={styles.container}>
            <GooglePlacesAutocomplete
              placeholder="Entrez la destination"
              fetchDetails={true}
              styles={{
                backgroundColor: 'blue',
          
                listView: {
                  backgroundColor: "red",
                  position: "absolute",
                  top: 60,
                },
              }}
              onPress={(data, details = null) => { onPress(data, details); }}
              query={{
                key: "AIzaSyBXJ_jco0wIOiAqlGOofYipRBGTw54ut5k",
                language: "fr",
              }}
              listViewDisplayed='auto'

            />

            <TouchableOpacity style={styles.icon}>
              <Ionicons name="search" size={24} color="#088A4B" />
            </TouchableOpacity>
          </View>

        </View>
  
  );
};

BarreRecherche.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
   alignSelf:'center',
    borderWidth: 1,
    borderColor: "#088A4B",
    height: '8%',
    width: '95%',
    borderRadius: 15,
    paddingLeft: '2%',
    flexDirection: "row",
    marginTop: '7%',
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

export default BarreRecherche;