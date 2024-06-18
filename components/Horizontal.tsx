import React from 'react';
import { View, StyleSheet } from 'react-native';


const Horizontal = () => {
    return(
        <View style={styles.line} />

    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        width: "82%",
        alignSelf:'center',
        marginTop:'2%',
        
    },
});

export default Horizontal;