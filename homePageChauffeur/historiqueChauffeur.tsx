import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import Back from '@/components/btnBack';
import { Entypo, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';


const HistoriqueChauffeur = () => {

    const data = [
        {
            id: "1",
            date: "Vendredi, 01-01-2024",
            course:"Course a ",
            heure: "08:00 PM",
            prix:"Prix: ",
            montant:"800XAF",
            depart:"Depart:",
            location1:"Ndogbong, commissariat 10eme",
            destination:"Destination:",
            location2:"Bonamoussadi, carrefour IPPB",
            distance:"Distance:",
            km:"2km",
        },
        {
            id: "2",
            date: "Vendredi, 01-01-2024",
            course:"Course a ",
            heure: "08:00 PM",
            prix:"Prix: ",
            montant:"800XAF",
            depart:"Depart:",
            location1:"Ndogbong, commissariat 10eme",
            destination:"Destination:",
            location2:"Bonamoussadi, carrefour IPPB",
            distance:"Distance:",
            km:"2km",
        },
        {
            id: "3",
            date: "Vendredi, 01-01-2024",
            course:"Course a ",
            heure: "08:00 PM",
            prix:"Prix: ",
            montant:"800XAF",
            depart:"Depart:",
            location1:"Ndogbong, commissariat 10eme",
            destination:"Destination:",
            location2:"Bonamoussadi, carrefour IPPB",
            distance:"Distance:",
            km:"2km",
        },
        {
            id: "4",
            date: "Vendredi, 01-01-2024",
            course:"Course a ",
            heure: "08:00 PM",
            prix:"Prix: ",
            montant:"800XAF",
            depart:"Depart:",
            location1:"Ndogbong, commissariat 10eme",
            destination:"Destination:",
            location2:"Bonamoussadi, carrefour IPPB",
            distance:"Distance:",
            km:"2km",
        },

    ];

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <Back />
                <Text style={styles.title}>Historique des courses</Text>

            </View>

            <FlatList
                style={{ marginTop: '4%' }}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.historique}>
                            <Text style={{ marginLeft: '5%', fontSize: 19, }}>{item.date}</Text>
                            <View style={styles.caractéristiques}>
                                <View style={styles.hourPrice}>
                                    <Text style={{ fontSize: 17 }}>{item.course}<Text style={{ fontWeight: 'bold', fontSize: 17,color:'#088A4B' }}>{item.heure}</Text></Text>
                                    <Text style={{ fontSize: 17 }}>{item.prix}<Text style={{ fontWeight: 'bold', fontSize: 17,color:'#088A4B' }}>{item.montant}</Text></Text>
                                </View>
                                <View style={styles.locationDistance}>
                                    <View style={{width:'100%',height:'40%'}}>
                                        <Text style={{ fontSize: 17,textAlign:'center' }}>{item.depart} </Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17,textAlign:'center',color:'#088A4B' }}>{item.location1}</Text>
                                    </View>
                                    <View style={{width:'100%',height:'40%'}}>
                                        <Text style={{ fontSize: 17,textAlign:'center' }}>{item.destination} </Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17,textAlign:'center',color:'#088A4B' }}>{item.location2}</Text>
                                    </View>
                                    <View style={{width:'100%',height:'35%'}}>  
                                        <Text style={{ fontSize: 16,textAlign:'center' }}>{item.distance}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17,textAlign:'center',color:'#088A4B' }}>{item.km}</Text>
                                    </View>
                                </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        //backgroundColor: "blue", //#fafafa
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
        marginLeft: '7%',
        marginBottom: '2%',
        fontSize: 20,
    },
    historique: {
        width: '95%',
        height: 230,
        alignSelf: 'center',
        padding: '1%',
    },
    caractéristiques: {
        width: '100%',
        borderRadius: 15,
        height: '79%',
        alignSelf: 'center',
        //backgroundColor: 'green',
        borderWidth:1,
        borderColor:'#088A4B',
        padding: '2%',
        marginTop: '4%',
    },
    hourPrice: {
        width: '100%',
        height: '22%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
    },
    locationDistance: {
        width: '100%',
        alignSelf: 'center',
        height: '65%',
        marginTop: '2%',
    },
});

export default HistoriqueChauffeur;