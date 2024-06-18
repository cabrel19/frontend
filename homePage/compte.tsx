import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  TextInput,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ImageViewer from "@/components/ImageViewer";
import Horizontal from "@/components/Horizontal";
import Back from "@/components/btnBack";
import { getAuth, deleteUser } from "firebase/auth";
import { app, auth } from '@/firebase.config';
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
const firestore = getFirestore(app);

const PlaceholderImage = 'require("@/assets/images/10.png")';

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
      alert("Vous n'avez selectionner aucune image.");
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
  };


  const handleDeleteAccount = async () => {
    Alert.alert(
      "Confirmation",
      "Êtes-vous sûr de vouloir supprimer votre compte ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: async () => {
            try {
              //const auth = getAuth();
              const currentUser = auth.currentUser;
              if (currentUser) {
                await deleteDoc(doc(firestore, "users", currentUser.uid));
                Alert.alert("Succès", "Votre compte a été supprimé.");
                navigation.navigate("Inscription"); // Utilisation de la navigation pour aller à la page Inscription
              } else {
                Alert.alert("Erreur", "Aucun utilisateur connecté.");
              }
            } catch (error) {
              Alert.alert("Erreur", );
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

    return (

      <View style={styles.container}>

        <View style={styles.header}><Back /></View>
        <View style={styles.header2}></View>
        <View style={styles.photo} ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={require("@/assets/images/10.png")}
            selectedImage={selectedImage}
          />
          <AntDesign
            name="pluscircle"
            size={28}
            color="#088A4B"
            onPress={pickImageAsync}
            style={{ right: '14%', top: '7%' }}
          />
        </View>
        {
          <View style={styles.footerContainer}>

            <View style={styles.infos}>
              <MaterialIcons name="perm-identity" size={24} color="#088A4B" />
              <Text style={{ marginLeft: "4%", fontWeight: 'bold' }}>Name:</Text>
              <Text style={{ marginLeft: "18%" }}>MALAIKA</Text>
            </View>


            <View style={styles.infos}>
              <MaterialIcons name="phone-android" size={24} color="#088A4B" />
              <Text style={{ marginLeft: "4%", fontWeight: 'bold' }}> Tel: </Text>
              <Text style={{ marginLeft: "18%" }}> 693547739 </Text>
            </View>




            <TouchableOpacity style={styles.infos} onPress={() => navigation.navigate("Motdepasse")}>
              <Text>Mot de passe</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" style={{ marginLeft: '66%' }} />
            </TouchableOpacity>

          </View>
        }



        <TouchableOpacity onPress={handleDeleteAccount} style={styles.deleteAccount}>
          <MaterialCommunityIcons name="account-remove-outline" size={30} color="#b22222" />
          <Text style={{ fontSize: 18, marginLeft: '4%', color: '#b22222', }}>Supprimer le compte</Text>
        </TouchableOpacity>

      </View>

    );

  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    rootView: { backgroundColor: 'blue' },
    header: {
      width: "100%",
      height: "17%",
      backgroundColor: "#088A4B",
      //padding:'4%'
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },

    header2: {
      width: "100%",
      height: "15%",
      //backgroundColor: "red",
    },
    photo: {
      width: "90%",
      height: "15%",
      // backgroundColor: "#E0E0E0",
      marginTop: "-45%",
      alignSelf: "center",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    footerContainer: {
      width: "95%",
      height: "40%",
      marginTop: "10%",
      alignSelf: "center",
      // backgroundColor: "blue",
    },
    infos: {
      width: "92%",
      height: "25%",
      padding: "2%",
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      marginTop: "5%",
      borderRadius: 10,
      backgroundColor: "white",
    },
    deleteAccount: {
      flexDirection: 'row',
      marginTop: '45%',
      width: '60%',
      marginLeft: '7%',
      alignItems: 'center',
    },

  });

  export default Compte;