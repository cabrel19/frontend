import React from "react";
import { StyleSheet,TouchableOpacity,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} color="black" />
            <Text style={{ fontSize: 18, color: 'black' }}>Back</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    back: {
       alignSelf: 'flex-start',
        alignItems: 'center',
        width: 70,
        flexDirection: 'row',
        marginTop:'10%'
       // backgroundColor:'red'
    },
});
export default Back;