import React from "react";
import { StyleSheet,TouchableOpacity,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackHome = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} color="black" />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    back: {
        alignSelf: 'flex-start',
    },
});
export default BackHome;