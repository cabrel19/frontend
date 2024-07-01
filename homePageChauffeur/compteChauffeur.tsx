import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ImageViewers from "@/components/ImageViewer";
import Back from "@/components/btnBack";
import { getAuth, deleteUser } from "firebase/auth";
import { app, auth } from '@/firebase.config';
import { getFirestore, doc, deleteDoc, getDoc } from "firebase/firestore";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';


const firestore = getFirestore(app);

interface UserData {
  name: string;
  phone: string;
  password: string;

}

const PlaceholderImage = 'require("@/assets/images/10.png")';

const CompteChauffeur = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      try {
        const user = getAuth().currentUser;
        if (user) {
          const userDoc = await getDoc(doc(firestore, "users", user.uid));
          if (userDoc.exists()) {
            const userDataFromFirestore = userDoc.data() as UserData;
            setUserData(userDataFromFirestore);
          } else { 
            Alert.alert("Erreur", "Aucune donnée utilisateur trouvée.");
          }
        } else {
          Alert.alert("Erreur", "Utilisateur non connecté.");
        }
        setLoading(false);
      } catch (error: any) {
        Alert.alert("Erreur", `Erreur lors de la récupération des données: ${error.message}`);
      }
    };

    fetchUserData();
  }, []);

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


  return (

    <View style={styles.container}>

      <View style={styles.header}><Back /></View>
      <View style={styles.header2}></View>
      <View style={styles.photo} ref={imageRef} collapsable={false}>

        <ImageViewers
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

      {loading ? (
        <View style={styles.footerContainer}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['#fff', '#E4E8E6', '#fff']}
            stopAutoRun={false}
            style={styles.shimmer}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['#fff', '#E4E8E6', '#fff']}
            stopAutoRun={false}
            style={styles.shimmer}
          />
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            shimmerColors={['#fff', '#E4E8E6', '#fff']}
            stopAutoRun={false}
            style={styles.shimmer}
          />
        </View>
      ) : (
        userData && (
          <View style={styles.footerContainer}>
            <View style={styles.infos}>
              <MaterialIcons name="perm-identity" size={24} color="#088A4B" />
              <Text style={{ marginLeft: "4%", fontWeight: 'bold' }}>Name:</Text>
              <Text style={{ marginLeft: "18%", fontSize:18 }}>{userData.name}</Text>
            </View>
            <View style={styles.infos}>
              <MaterialIcons name="phone-android" size={24} color="#088A4B" />
              <Text style={{ marginLeft: "4%", fontWeight: 'bold' }}> Tel: </Text>
              <Text style={{ marginLeft: "18%", fontSize:18 }}> {userData.phone} </Text>
            </View>
            <TouchableOpacity style={styles.infos} onPress={() => navigation.navigate("Motdepasse")}>
              <Text style={{fontSize:17}}>Mot de passe</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="#088A4B" style={{ marginLeft: '61%' }} />
            </TouchableOpacity>
          </View>
        )
      )}


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
    padding: "3%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "5%",
    borderRadius: 10,
    backgroundColor: "white",
  },
  shimmer: {
    width: '92%',
    height: '25%',
    marginBottom: '5%',
    alignSelf: 'center',
    borderRadius: 10,
  },

});

export default CompteChauffeur;