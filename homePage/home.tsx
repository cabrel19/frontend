import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons, Fontisto } from '@expo/vector-icons';

const Home = ({ navigation }: any) => {
  const [carouselItems] = useState([
    {
      title: 'Suivi en Temps Réel',
      image: require('@/assets/images/commande.png'),
    },
    {
      title: 'Livraison Rapide',
      image: require('@/assets/images/home2.png'),
    },
    {
      title: 'Transport Sécurisé',
      image: require('@/assets/images/home1.png'),
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>G
          <Text style={{ fontSize: 26, color: 'white' }}>o</Text>
          M
          <Text style={{ fontSize: 26, color: 'white' }}>obil</Text>
        </Text>
      </View>
      <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',marginTop:'2%'}}>BIENVENUE,</Text>
      <Text style={styles.effectuez}>Effectuez vos courses et livraisons en toute sécurité</Text>
      <View style={styles.swipper}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
          {carouselItems.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={item.image} style={styles.banner} />
              <Text style={styles.textImage}>{item.title}</Text>
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.footer}>

        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => navigation.navigate("ReglageClient")}
        >
          <Ionicons name="menu" size={28} color="white" />
          <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>MENU</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.course}
          onPress={() => navigation.navigate("Commander")}
        >
          <MaterialIcons
            name='emoji-transportation'
            size={28}
            color="white"
          />
          <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>COURSE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.livraison}
          onPress={() => navigation.navigate('DestinationLIV')}
        >
          <Fontisto name='motorcycle' size={28} color="white"/>
          <Text style={{ color: "white", fontSize: 15 }}> LIVRAISON </Text>
        </TouchableOpacity>


      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#20C474',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    fontSize: 24,
    color: '#088A4B',
    textAlign: 'center',
    marginTop:'6%',
  },
  wrapper: {
    height: '100%',
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: Dimensions.get('window').width,
    height: '80%',

  },
  textImage: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '10%',
  },
  effectuez: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '3%',
    width: '80%',
    //backgroundColor:'blue',
    alignSelf: 'center',
  },
  swipper: {
    marginTop: '3%',
    height: '67%',
  },
  footer: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 30,
    //marginBottom: '7%',
    alignItems: "center",
    justifyContent: "center",
    height: '10%',
    backgroundColor: "#20C474",
    alignSelf: "center",

  },
  hamburger: {
    width: '15%',
    flexDirection: 'column',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16%'
  },
  course: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    width: '22%',
    marginRight: '12%'
  },

  livraison: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    width: '27%',
  },

});

export default Home;