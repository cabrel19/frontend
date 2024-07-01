import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Back from "@/components/btnBack";
import { ImageBackground } from "react-native";

const HistoriqueCommande = ({ navigation }: any) => {
  const data = [
    {
      id: "1",
      date: "Mardi 07 mai 2024",
      course: "course a",
      image: require("@/assets/images/voiture.png"),
      heure: "12h34",
      periode: "en journee",
      prix: "1000XAF",
      destination: ",N3 Commissariat 10eme",
    },

    {
      id: "2",
      date: "Vendredi 10 mai 2024",
      course: "course a",
      image: require("@/assets/images/moto2.png"),
      heure: "18h08",
      periode: "en soiree",
      prix: "800XAF",
      destination: ",Bonamoussadi carrefour IPPB",
    },
  ];

  return (
    <View style={styles.container}>
        <View style={styles.header}>
               <Back/>
               <Text style={styles.title}>Historique des commandes</Text>

</View>

   <FlatList
        style={{ marginTop: '4%' }}
        data={data}
        renderItem={({ item }) => {
          return(
            <View style={styles.historique}>
             
             <Text style={{ marginLeft: '5%', fontSize: 19, color: '#A9A9A9'}}>{item.date}</Text>
              <View style={styles.caracteristiques}>

             
                 <View style={styles.hourPrice}>
                  
                 
                     <Text style={{ fontSize: 17 }}>{item.course} <Text style={{  fontSize: 17}}> {item.heure} <Text style={{  fontSize: 17}}> {item.periode}  </Text></Text></Text>
                  
                     <Text style={{fontSize: 17 , height:'43%',width:'100%'}}> {item.prix} <Text style={{ fontSize: 17}}> {item.destination}</Text></Text>
                  </View>


                  <Image source={item.image}
                                        style={{ height: '100%', width: '27%' }}
                                    />
              </View>
             </View>
          )

        }}
         keyExtractor={item => item.id}
         contentContainerStyle={{ paddingBottom: 10, }}
   />

   
    </View>
  );
};
const styles = StyleSheet.create ({
  container:{
    flex:1,
    width:'100%',
    height:'100%',
   // marginTop: '7%'
  },

  header: {
    width: '100%',
    height: '15%',
    padding: '2%',
    backgroundColor: '#088A4B',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    // marginTop:'10%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    marginLeft: '3%',
    marginTop: '2%',
    fontSize: 20,
    color: 'white',
},
 historique: {
  width: "95%",
  height: 120,
  alignSelf: "center",
  padding: 2,
  //backgroundColor: 'blue',

 },
 caracteristiques: {
  width: "100%",
  borderRadius: 10,
  alignSelf: "center",
  flexDirection: 'row',
  alignItems: "center",
  height: "60%",
  borderWidth: 1,
  padding: 8,
  marginTop: 8,

 },
 hourPrice: {
  width: "77%",
  height: "90%",
  justifyContent: 'space-between',
  alignSelf: 'center'
 }

 
});
export default HistoriqueCommande;
