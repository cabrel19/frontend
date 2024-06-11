import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';


const HomeChauffeur = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Entypo
                    name='menu'
                    size={40}
                    color="#088A4B"
                    style={{ width: '85%' }}
                />

                <Ionicons
                    name='notifications-circle-outline'
                    size={40}
                    color="#088A4B"
                />

            </View>

            <View style={styles.statut}>

                <Text style={{ width: '50%' }}>STATUT</Text>
                <TouchableOpacity style={styles.choice}>
                    <Text style={{ width: '80%' }}>en service</Text>
                    <AntDesign
                        name='down'
                        size={18}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.recette}>
                <Text style={{ fontSize: 18, textAlign: 'center',fontWeight:'bold' }}> Bienvennue Mr</Text>
                <View style={styles.mtantRecette}>
                    <View style={styles.headerRecette}>
                        <Text style={{ color: 'white',fontSize:17 }}>Recette du mois:</Text>
                    </View>

                    <View style={styles.monthPrice}>
                        <Text style={{fontSize:17,width:'65%' }}>Mai</Text>
                        <Text style={{fontSize:17 }}>80000XAF</Text>
                    </View>

                </View>

                <View style={styles.mtantRecette}>
                    <View style={styles.headerRecette}>
                        <Text style={{ color: 'white',fontSize:17 }}>Montant a verser:</Text>
                    </View>

                    <View style={styles.monthPrice}>
                        <Text style={{fontSize:17,width:'65%' }}>Mai</Text>
                        <Text style={{fontSize:17 }}>50000XAF</Text>
                    </View>

                </View>

            </View>

            <View style={styles.commande}>
            <View style={styles.notification1}>
                    <View style={styles.headernotification}>
                        <Text style={{ color: 'white',fontSize:17 }}>Commande en cour</Text>
                    </View>
                    
                    <View style={styles.location}>
                    <Text> Depart:</Text>
                        
                    </View>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    header: {
        width: '90%',
        height: '5%',
        flexDirection: 'row',
        // backgroundColor: 'blue',
        alignItems: 'center',
        alignSelf: 'center',
    },
    statut: {
        padding: '3%',
        width: '70%',
        height: '7%',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#D9D9D9',
        marginTop: '3%',
        alignItems: 'center',
    },
    choice: {
        flexDirection: 'row',
        width: '50%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#088A4B',
        borderRadius: 5,
        alignItems: 'center',
        padding: '2%',
    },
    recette: {
        width: '85%',
        height: '35%',
        alignSelf: 'center',
        marginTop: '7%',
        padding: '3%',
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
    },
    mtantRecette: {
        width: '90%',
        height: '40%',
        alignSelf: 'center',
        marginTop: '3%',
        borderWidth: 1,
        borderColor: '#088A4B',
        borderRadius: 20,
    },
    headerRecette: {
        width: '100%',
        height: '40%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#088A4B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    monthPrice:{
        width:'100%',
        height:'50%',
        alignItems:'center',
        flexDirection:'row',
        padding:'5%',
        //backgroundColor:'blue'
    },
    commande:{
        width:'85%',
        height:'44%',
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        padding:'5%',
        alignSelf:'center',
        marginTop:'7%',
    },
    notification1:{
        width:'100%',
        height:'45%',
        alignSelf:'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#088A4B',
    },
    headernotification:{
        width:'100%',
        height:'30%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'#088A4B',
        alignItems:'center',
        justifyContent:'center',
    },
    location:{
        marginTop:'2%',
        width:'100%',
        height:'25%',
        alignSelf:'center',
        backgroundColor:'red',
        alignItems:'center',
        flexDirection:'row',
        padding:'3%',
        
    },

});

export default HomeChauffeur;