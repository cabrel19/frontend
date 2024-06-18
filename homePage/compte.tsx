
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
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageViewer from "@/components/ImageViewer";
import Horizontal from "@/components/Horizontal";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const PlaceholderImage = require("@/assets/images/10.png");

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

  // const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  // const snapPoints = useMeno(() => ['25%', '50%'],[]);
  // const handlerPresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // })


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.header2}></View>
      <View style={styles.photo} ref={imageRef} collapsable={false}>
        <TouchableOpacity onPress={() => Alert.alert("") }>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        <AntDesign
          name="pluscircle"
          size={28}
          color="#088A4B"
          onPress={pickImageAsync}
          style={{ top: "-18%", left: "74%" }}
        />
        </TouchableOpacity>
      </View>
      {
        <View style={styles.footerContainer}>

          <View style={styles.infos}>
            <MaterialIcons name="perm-identity" size={24} color="#088A4B" />
            <Text style={{ marginLeft: "4%",fontWeight:'bold' }}>Name:</Text>
            <Text style={{ marginLeft: "18%" }}>MALAIKA</Text>
          </View>

          <Horizontal />

          <View style={styles.infos}>
            <MaterialIcons name="phone-android" size={24} color="#088A4B" />
            <Text style={{ marginLeft: "4%",fontWeight:'bold' }}> Tel: </Text>
            <Text style={{ marginLeft: "18%" }}> 693547739 </Text>
          </View>
          <View style={{
       
       
       justifyContent: 'center',
       alignSelf: 'center',
       marginTop: '85%',
       marginLeft: 35,
       height: 60,
       width: "98%",
       

   }}>
    <TouchableOpacity onPress={() =>Alert.alert("")}  style={{}}>
          <MaterialCommunityIcons name="account-remove-outline" size={22} color="#b22222"  style={{ top: 19, right:10}} />
          <Text style={{fontSize: 16, marginLeft:26, color: '#b22222'}}>Supprimer le compte</Text>
          </TouchableOpacity>

        </View>
        </View>
      }
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {},

  header: {
    width: "100%",
    height: "17%",
    backgroundColor: "#088A4B",
  },

  header2: {
    width: "100%",
    height: "15%",
    // backgroundColor: "red",
  },
  photo: {
    width: "32%",
    height: "22%",
    backgroundColor: "#E0E0E0",
    marginTop: "-39%",
    alignSelf: "center",
    borderRadius: 300,
  },
  image: {},
  optionsContainer: {},

  footerContainer: {
    width: "95%",
    height: "40%",
    marginTop: "5%",
    alignSelf: "center",
    
  },
  infos: {
    width: "92%",
    height: "25%",
    padding: "2%",
    flexDirection: "row",
    shadowOpacity:1,
    alignSelf: "center",
    alignItems: "center",
    marginTop: "5%",
    shadowColor:'#eee',
    backgroundColor: "white",
    borderRadius:5,
  },

});

export default Compte;
