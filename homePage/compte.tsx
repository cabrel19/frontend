import React from "react";
import { useState, useRef } from 'react';

import { View, StyleSheet, Button, Alert, TouchableOpacity, Text, Image, Platform, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from "@/components/ImageViewer";
import { MaterialIcons, Ionicons,AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";


const PlaceholderImage = require('@/assets/images/2.png');

const Compte = ({ navigation }: any) => {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('you did not select any image.');
    }
  };
  if (status === null) {
    requestPermission();
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  }






  return (
    <GestureHandlerRootView style={styles.container}>

      <View style={styles.header}>
      </View>

      <View style={styles.photo} ref={imageRef} collapsable={false}  >
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        <AntDesign name="pluscircle" size={28} color='rgba(8, 138, 75, 0.93)' onPress={pickImageAsync} style={{ top: -50, left: 170 }} />
      </View>
      {
        (
          <View style={styles.footerContainer}>
            <TouchableOpacity >
              <View
                style={{
                  padding: 18,
                  marginBottom: 10,
                  borderRadius: 10,
                  borderColor: "rgba(119, 119, 119, 1)",
                  borderWidth: 1,
                  height: 60,
                  width: "95%",
                }}
              >

                <Text>
                  Nom:
                </Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity>
              <View
                style={{
                  padding: 18,
                  marginBottom: 10,
                  borderRadius: 10,
                  borderColor: "rgba(119, 119, 119, 1)",
                  borderWidth: 1,
                  height: 60,
                  width: "95%",
                }}
              >
                <Text>
                  Numero:
                </Text>

              </View>
            </TouchableOpacity>


            <View
              style={{
                padding: 18,
                marginBottom: 40,
                borderRadius: 10,
                borderColor: "rgba(119, 119, 119, 1)",
                borderWidth: 1,
                height: 60,
                width: "95%",
              }}
            >


              <TouchableOpacity onPress={() => navigation.navigate("Motdepasse")}>
                <Text>Mot de passe:</Text>
                <MaterialIcons name="arrow-forward-ios" size={24} color="rgba(119, 119, 119, 1)" style={{ top: -16, left: 310 }} />
              </TouchableOpacity>
            </View>

            <View style={{

              marginTop: 90,
              marginLeft: 15,
              height: 60,
              width: "98%",
            }}>
              <TouchableOpacity onPress={() => Alert.alert("")}>
                <MaterialCommunityIcons name="account-remove-outline" size={22} color="#b22222" style={{ top: 19, right: 10 }} />
                <Text style={{ fontSize: 16, marginLeft: 26, color: '#b22222' }}>Supprimer le compte</Text>
              </TouchableOpacity>

            </View>

          </View>
        )
      }



    </GestureHandlerRootView>

  );
};


const styles = StyleSheet.create({

  container: {

  },

  header: {
    width: 425,
    height: 168,
    backgroundColor: 'rgba(8, 138, 75, 0.93)',

  },
  photo: {
    width: 211,
    height: 211,
    backgroundColor: 'white',
    marginTop: -104,
    margin: 90,
    borderRadius: 300,


  },
  image: {

  },
  optionsContainer: {

  },

  footerContainer: {
    width: 378,
    height: 280,
    marginLeft: 20,

  },

  optionRow: {

  }

})



export default Compte;