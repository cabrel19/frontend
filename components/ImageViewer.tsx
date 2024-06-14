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
        width: '36%',
        height: '100%',
        borderRadius: 300,
        backgroundColor:'#E8F4F3',
        //borderWidth:2,
       // borderColor:'#088A4B',
      },
    });

    export default ImageViewer;