import React from "react";
import { StyleSheet,TouchableOpacity,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={{ fontSize: 18, color: 'black' }}>Back</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    back: {
       alignSelf: 'flex-start',
        alignItems: 'center',
        width: 70,
        height:40,
        flexDirection: 'row',
        marginTop:'10%',
        marginLeft:'3%',
       // backgroundColor:'red'
    },
});
export default Back;