import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import Back from '@/components/btnBack';
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";


const ReglageClient = ({ navigation }: any) => {

  const handleLogout = async () => {
    try {
      // Naviguer vers l'écran de connexion ou l'écran d'accueil après la déconnexion
      navigation.navigate("Connexion");
      await signOut(auth);
      Alert.alert("Succès", "Déconnexion réussie !");
    } catch (error: any) {
      Alert.alert("Erreur", `Erreur lors de la déconnexion: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>

      <Back />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Compte")}>

        <MaterialIcons name="account-circle" size={30} color="#088A4B" />

        <Text style={styles.textReglage}> Mon compte </Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.button} >

        <FontAwesome5 name="history" size={30} color="#088A4B" />

        <Text style={styles.textReglage} >  Historique de commandes </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Information")}>

        <Ionicons name="information-circle" size={30} color="#088A4B" />

        <Text style={styles.textReglage}>  Informations </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Parametres")}>
        <MaterialIcons name="settings" size={30} color="#088A4B" />
        <Text style={styles.textReglage} > Paramètres </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notification')}>
        <Ionicons name="notifications" size={30} color="#088A4B" />

        <Text style={styles.textReglage} > Notification </Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Securite")}>

        <Entypo name="help-with-circle" size={30} color="#088A4B" />

        <Text style={styles.textReglage} > Aide et support </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProposChauffeur')}>

        <MaterialIcons name="security" size={30} color="#088A4B" />

        <Text style={styles.textReglage} >  A propos </Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.footer} onPress={handleLogout}>

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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '3%',
    top: '4%'
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
    marginTop: '10%',
    width: '40%',
    marginLeft: '7%',
    alignItems: 'center',
  },
});

export default ReglageClient;

