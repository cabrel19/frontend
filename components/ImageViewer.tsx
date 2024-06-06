import {StyleSheet, Image} from "react-native";
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
        width: 211,
        height: 211,
        borderRadius: 300,
      },
    });

    export default ImageViewer;