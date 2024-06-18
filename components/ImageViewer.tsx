import {StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
  
const ImageViewer =({placeholderImageSource, selectedImage}:{placeholderImageSource: any, selectedImage: string}) =>  {

  const imageSource = selectedImage ? { uri: selectedImage} : placeholderImageSource

    return (
      
      <Image source={imageSource} style={styles.image} />

    );
} 
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 300,
      },
    });

    export default ImageViewer;