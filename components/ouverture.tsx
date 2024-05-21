import React from "react";
import {View,StyleSheet,Image,ActivityIndicator} from "react-native";

export default function ouverture() {
    return (
        <View style={styles.container}>
           
           <View style={styles.contImage}>
                <Image
                   source={require('@/assets/images/ouverture.png')}
                   style={styles.image}
                />
           </View>

            <View style={styles.loading}>
                <ActivityIndicator size="large" color="green"/>
            </View>
            
        </View>


    );
}
const styles = StyleSheet.create ({

    container:{
        marginTop:40,
        justifyContent:'center',
        textAlign:'center',
    },
    contImage:{
        width:"80%",
        height:200,
        textAlign:'center',
        marginRight:10,
    },
    loading:{
        marginTop:350,
        alignItems:'center'
    },
});
