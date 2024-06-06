import React from 'react';
import { Text, Image, View, StyleSheet,ImageBackground } from 'react-native';


export function SecondVue(){
    
    
    return( 
        <View style={styles.container}>
    
       <ImageBackground
        source={require('@/assets/images/fond.jpeg')} 
        style={styles.imageone}
        
        
        
        />
        
        
        </View>
        

    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
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