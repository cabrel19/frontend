import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export function Logo(){
    return(
        <View style={styles.container}>
        <Image
        source={require('@/assets/images/2.png')} 
        style={styles.image}
        />

        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      height: 30,
      justifyContent: 'center',
      alignContent: 'center',

     
    },

    image: {
        width: 194,
        height: 30,
        margin: 100,
        

    },
   
});


