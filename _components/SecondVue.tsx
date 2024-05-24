import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


export function SecondVue(){
    
    
    return( 
        <View style={styles.container}>
    
       <Image
        source={require('@/assets/images/3.png')} 
        style={styles.imageone}
        />
        
        <Image
        source={require('@/assets/images/4.png')} 
        style={styles.image}
        />
        </View>
        

    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       margin: 2,
       zIndex: -1,

    },

    imageone: {
        elevation: 3,
        zIndex: 880,
        
        
    },

    image: {
        elevation: 2,
        zIndex: 860,

    }
});