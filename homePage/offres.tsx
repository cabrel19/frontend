import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert,Clipboard } from "react-native";
//import  Share from "react-native-share";
import Back from "@/components/btnBack";
import { ClipboardStatic } from "react-native";
import BackHome from '@/components/backHome';

const genererCode = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codePromo = '';
    for (let i =0; i < 9; i++) {
        codePromo +=
        caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codePromo;
};


const Offres = () => {

    const [codePromo, setCodePromo] = useState('');

    useEffect(() => {
        const code = genererCode();
        setCodePromo(code);
    }, []);

    const handleCopier = () => {
        Clipboard.setString(codePromo);
        Alert.alert('succès', 'Le code a été copié');
    };


    return (

        <View style={styles.container}>
            <View style={styles.header}>
            <BackHome />
                <View style={styles.gomobil}>
                    <Text style={{ alignSelf: 'center', fontSize: 22}}>
                        <Text style={{ color: '#088A4B' }}> G</Text>
                        O
                        <Text style={{ color: '#088A4B' }}>M</Text>
                        OBIL
                    </Text>
                </View>
            </View>
            <Image
                source={require('@/assets/images/promo.png')}
                style={styles.image}
            />

            <Text style={styles.profitez}>PROFITEZ DE CETTE OFFRE!</Text>

            <View>
                <Text style={{ fontFamily: 'archivo black', fontSize: 20, marginLeft: 50, marginTop: 80, }}>INVITEZ UN AMI</Text>
            </View>

            <Text style={{ marginLeft: 40, fontFamily: 'abel', width: "85%", fontSize: 16, marginTop:6,}}>
                Votre ami recevra une reduction de 10% sur sa première course.
            </Text>


            <View>
                <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 30, fontFamily: 'archivo black' }}>PROFITEZ DE
                    <Text style={{ alignSelf: 'center', fontFamily: 'archivo black', fontSize: 20, color: '#088A4B' }}> 50% DE REDUCTION</Text>
                </Text>
            </View>

            <Text style={{ alignSelf: 'center', fontFamily: 'abel', width: "85%", fontSize: 16, marginTop:6,}}>
                Une fois qu’il aura effectue sa première course,vous bénéficierez de 50% de reduction sur votre
                prochain trajet.
            </Text>


            <TouchableOpacity style={styles.partager} >
                <Text style={{ fontSize: 20 }}>PARTAGER</Text>
                <Text style={{ fontSize: 16 }}>Il reste 700 codes promotionnels</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCopier} style={styles.copier}>
                <Text style={{ fontSize: 16, marginRight: 150, }}>{codePromo}</Text>
                <Text style={{ fontSize: 16 }}>Copier</Text>
            </TouchableOpacity>


        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        alignItems: 'center',
        marginTop:'10%',
    },
    gomobil:{ 
        width: '65%',
        marginLeft:'10%',
    },
    image: {
        width: '95%',
        height: '35%',
       // alignItems:'center',
    },
    profitez:{ 
        alignSelf: 'center', 
        fontSize: 20, 
        marginTop: 10, 
        
    },
    partager: {
        padding: 13,
        borderRadius: 15,
        marginTop: 40,
        width: 312,
        height: 46,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#088A4B'

    },

    copier: {
        borderRadius: 15,
        marginTop: 20,
        width: 312,
        height: 38,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderWidth: 1,
        borderColor: '#777777',
        flexDirection: 'row',

    },


});

export default Offres;