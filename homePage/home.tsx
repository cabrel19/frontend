import { useState } from "react";
import React from "react";
import { Text, View,Image, StyleSheet,TouchableOpacity, } from "react-native";
import { MaterialIcons} from '@expo/vector-icons';


const Home = () => {


    return (

        <View style={styles.container}>

            <Text style={{alignSelf:'center', fontSize:22}}>
                <Text style={{color:'#088A4B'}}> G</Text>
                O
                <Text style={{color:'#088A4B'}}>M</Text>
                OBIL
            </Text>
           
            <TouchableOpacity style={styles.transport}>
                <Text style={{ color: 'black',textAlign:'center', fontSize: 20 }}>Ou allez-vous 
                   <Text style={{color:'#088A4B'}}> ?</Text> 
                </Text>

                <MaterialIcons
                name='search'
                size={25}
                color='black'
                style={styles.icon}
                />

            </TouchableOpacity>

            <Image
              source={require('@/assets/images/home1.png')}
              style={styles.home1}
            />

            <Image
              source={require('@/assets/images/home2.png')}
              style={styles.home2}
            />

            <View style={styles.footer}>
                <View style={styles.menu}>
                    <TouchableOpacity>
                       <View style={styles.line} />
                       <View style={styles.line} />
                       <View style={styles.line} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.delivery}>
                   <Text style={{ color: '#fff', fontSize: 20}}>LIVRAISON</Text>
                </TouchableOpacity>

            </View>





        </View>

    );
};

const styles = StyleSheet.create({

    container:{
        backgroundColor:'white',
        flex:1,
    },

    transport:{
        padding: 13,
        borderRadius: 10,
        marginTop: 30,
        width:370,
        height:52,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#088A4B',
        flexDirection:'row',
    
    },

    icon:{

        marginLeft:170,

    },

    home1:{
        width:341,
        height:281,
        alignSelf:'center',
    },

    home2:{
        width:341,
        height:281,
        alignSelf:'center',
    },

    footer:{
        flexDirection:'row',
        marginTop:40,
        justifyContent: 'flex-end',
    },

    menu:{
        flexDirection: 'column',
        marginRight:190,
        marginTop:10,

        
    },

    line:{
       width:40,
       height:4,
       backgroundColor:'#088A4B',
       marginTop:5,
    },

    delivery:{
        backgroundColor: '#088A4B',
       borderRadius: 10,
       width:147,
       height:50,
       justifyContent:'center',
       alignItems:'center',
       marginRight:5,
    },
    
});

export default Home;