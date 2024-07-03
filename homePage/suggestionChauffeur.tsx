import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import BackHome from '@/components/backHome';
import { GeoPoint, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/firebase.config';

interface UserData {
  lieu_depart: GeoPoint[];
  lieu_arrivée: GeoPoint[];
  statut:string[];
  prix: string;
  distance: string;
}

const SuggestionChauffeur = ({ navigation, route }: any) => {

  const { driverType, destination, origin } = route.params;

  const initialValue: UserData = {
    lieu_depart: origin ,
    lieu_arrivée: destination,
    statut:["libre", "prise", "terminée"],  
    prix: '',
    distance: '',
   }

  const [utilisateur, setUtilisateur] = useState<UserData>(initialValue);

   const createCommande = async () => {
    try {
      console.log("Origin:", origin);
      await addDoc(collection(firestore, "commandes",), {
          lieu_depart: utilisateur.lieu_depart,
          lieu_arrivée: utilisateur.lieu_arrivée,
          statut: utilisateur.statut[0],
          distance: utilisateur.distance,
          prix: utilisateur.prix,
        });
        navigation.navigate('Chauffeur');
      
    
    } catch (error: any) {
      Alert.alert("Une erreur lors de la creation de la commande", error.message);
    } 
  };
  
  const getDriverTypeText = (type: string) => {
    switch (type) {
        case '1':
            return 'Chauffeurs moto';
        case '2':
            return 'Chauffeurs eco';
        case '3':
            return 'Chauffeurs confort';
        case '4':
            return 'Chauffeurs confort+';
        default:
            return 'Chauffeurs confort';
    }
};

  const data = [
    {
      id: "1",
      image: require('@/assets/images/profit.jpg'),
      nom: 'TOTO DUCOBU',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "2",
      image: require('@/assets/images/profit.jpg'),
      nom: 'TOTO DUCOBU',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "3",
      image: require('@/assets/images/profit.jpg'),
      nom: 'TOTO DUCOBU',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "4",
      image: require('@/assets/images/profit.jpg'),
      nom: 'TOTO DUCOBU',
      note: 'NOTE:',
      moyenne: '07/10',
    },
  ];

  const data1 = [
    {
      id: "1",
      image1: require('@/assets/images/profil.jpeg'),
      nom: 'DJIBRIL SOYA',
      confort: 'ECO',
      image2: require('@/assets/images/money.png'),
      prix: '600XAF',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "2",
      image1: require('@/assets/images/profil.jpeg'),
      nom: 'DJIBRIL SOYA',
      confort: 'ECO',
      image2: require('@/assets/images/money.png'),
      prix: '600XAF',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "3",
      image1: require('@/assets/images/profil.jpeg'),
      nom: 'DJIBRIL SOYA',
      confort: 'ECO',
      image2: require('@/assets/images/money.png'),
      prix: '600XAF',
      note: 'NOTE:',
      moyenne: '07/10',
    },
    {
      id: "4",
      image1: require('@/assets/images/profil.jpeg'),
      nom: 'DJIBRIL SOYA',
      confort: 'ECO',
      image2: require('@/assets/images/money.png'),
      prix: '600XAF',
      note: 'NOTE:',
      moyenne: '07/10',
    },
  ];
  return (
    <View style={styles.container}>

      <BackHome />

      <Text style={{ textAlign: 'center', fontSize: 24 }}>{getDriverTypeText(driverType)}</Text>

      <View style={{ width: "100%", height: '34%' }}>
        <FlatList
          style={{ marginTop: '4%' }}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.chauffeur} onPress={createCommande}>
                <View style={styles.profil}>
                  <View style={{ width: '30%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      source={item.image}
                      style={{ width: '85%', height: '84%', borderRadius: 30, }}
                    />
                  </View>
                  <Text style={{ marginLeft: '3%' }}>{item.nom}</Text>
                </View>

                <View style={styles.note}>
                  <Text>{item.note}<Text style={{ color: '#088A4B' }}>{item.moyenne}</Text></Text>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 100, }}

        />
      </View>

      <Text style={{ textAlign: 'center', fontSize: 24, marginTop: '8%' }}>Autres suggestions</Text>

      <View style={{ width: "100%", height: '50%' }}>
        <FlatList
          style={{ marginTop: '4%' }}
          data={data1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.suggesChauffeur} onPress={createCommande}>
                <View style={styles.header}>
                  <View style={styles.profil}>
                    <View style={{ width: '30%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        source={item.image1}
                        style={{ width: '75%', height: '84%', borderRadius: 30, }}
                      />
                    </View>
                    <Text style={{ marginLeft: '3%' }}>{item.nom}</Text>
                  </View>
                  <View style={styles.note}>
                    <Text>{item.confort}</Text>
                  </View>
                </View>

                <View style={styles.footer}>
                  <View style={styles.prix}>
                    <Image source={item.image2} />
                    <Text style={{ marginLeft: '5%', fontSize: 16 }}>{item.prix}</Text>
                  </View>
                  <View style={styles.suggesNote}>
                    <Text>{item.note}<Text style={{ color: '#088A4B' }}>{item.moyenne}</Text></Text>
                  </View>
                </View>

              </TouchableOpacity >
            )
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 100, }}

        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
    marginTop: '14%'
  },
  chauffeur: {
    width: '90%',
    height: 80,
    flexDirection: 'row',
    marginTop: '4%',
    borderRadius: 10,
    padding: '2%',
    shadowOpacity: 2,
    shadowColor: '#eee',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  profil: {
    width: '65%',
    height: '100%',
    //backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
  },
  note: {
    width: '35%',
    height: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggesChauffeur: {
    width: '90%',
    height: 120,
    //flexDirection: 'row',
    marginTop: '4%',
    borderRadius: 10,
    padding: '2%',
    shadowOpacity: 2,
    shadowColor: '#eee',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    height: '50%',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  footer: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    //  backgroundColor: 'blue',
  },
  prix: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'green',
    marginLeft: '21%',
  },
  suggesNote: {
    width: '33%',
    marginLeft: '15%',
    height: '100%',
    alignItems: 'center',
    // backgroundColor:'yellow',
    justifyContent: 'center',

  },
});

export default SuggestionChauffeur;