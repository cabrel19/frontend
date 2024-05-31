import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

const First = () => {
    const navigation = useNavigation();
   
    const topTextPosition = useSharedValue(-screenHeight/2); // position initiale au dessus de la page
    const bottomTextPosition = useSharedValue(screenHeight/2); // position initiale en dessous de la page

    useEffect(() => {
        
        topTextPosition.value = withTiming(0, {
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
        });
        bottomTextPosition.value = withTiming(0, {
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
        });
        const timeOut = setTimeout (() => {
            navigation.navigate('Ouverture');}, 3000);

            return() => clearTimeout(timeOut);
    
    }, [topTextPosition,bottomTextPosition]);

    const topTextStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: topTextPosition.value }],
        };
    });

    const bottomTextStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: bottomTextPosition.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.textContainer,styles.leftTextContainer, topTextStyle]}>
                <Text style={styles.text}>
                    G<Text style={{ color: 'black' }}>o</Text>
                </Text>
            </Animated.View>
            <Animated.View style={[styles.textContainer,styles.rightTextContainer, bottomTextStyle]}>
                <Text style={styles.text}>
                    M<Text style={{ color: 'black' }}>obil</Text>
                    </Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection:'row',

    },
    textContainer: {
        position: 'absolute',
        
    },
    leftTextContainer:{
        left:140,
    },
    rightTextContainer:{
       right:125
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color:'#088A4B'
    },
});

export default First;