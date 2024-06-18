import React from "react";
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    Text,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import Back from '@/components/btnBack';

//import {auth} from "@/firebase.config";

const ReglageChauffeur = ({ navigation }: any) => {
    return (
        <View style={styles.container}>

            <Back/>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('CompteChauffeur')}>

                <MaterialIcons name="account-circle" size={30} color="#088A4B" />

                <Text style={styles.textReglage}> Mon compte </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('HistoriqueChauffeur')}>

                <FontAwesome5 name="history" size={30} color="#088A4B" />

                <Text style={styles.textReglage} >  Historique de commandes </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NotificationChauffeur')}>

                <Ionicons name="notifications" size={30} color="#088A4B" />

                <Text style={styles.textReglage} > Notification </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AideSupport')}>

                <Entypo name="help-with-circle" size={30} color="#088A4B" />

                <Text style={styles.textReglage} > Aide et support </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProposChauffeur')}>

                <MaterialIcons name="security" size={30} color="#088A4B" />

                <Text style={styles.textReglage} >  A propos </Text>

            </TouchableOpacity>


            <TouchableOpacity style={styles.footer} >

                <MaterialIcons name="logout" size={30} color="#b22222" />

                <Text style={{ fontSize: 18, marginLeft: '4%', color: '#b22222', }}>Déconnexion</Text>

            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: "#fafafa",
        //padding: '1%'
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: '3%',
        height: '10%',
        width: "90%",
        flexDirection: "row",
        //shadowOpacity:4,
       // shadowColor:'#eee',
        backgroundColor:'white',
        borderRadius:10,
        padding: '3%',
        top:'4%'
    },
    textReglage: {
        color: "black",
        width: "80%",
        fontSize: 18,
        marginLeft: '8%',
       // fontWeight: "bold",
    },
    footer: {
        flexDirection: 'row',
        marginTop: '55%',
        width: '40%',
        marginLeft: '7%',
        alignItems: 'center',
    },
});

export default ReglageChauffeur;
