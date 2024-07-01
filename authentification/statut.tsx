import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Statut = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.choice}> Quel est votre statut ? </Text>
            <View style={styles.statut}>
                <TouchableOpacity style={styles.choiceStatut} onPress={() => navigation.navigate('Inscription')}>
                    <Text style={styles.textStatut}>CLIENT</Text>
                    <Image source={require('@/assets/images/client.png')} style={styles.imageClient} />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.choiceStatut} onPress={() => navigation.navigate('InscriptionChauffeur')}>
                <Text style={styles.textStatut}>CHAUFFEUR</Text>
                <Image source={require('@/assets/images/chauffeur.png')} style={styles.imageChauffeur} />
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
        backgroundColor:'#fafafa',
    },
    choice: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: '14%',
    },
    statut: {
        width: '95%',
        height: '50%',
        marginTop: '30%',
        
        flexDirection: 'column',
        alignSelf: 'center',
    },
    choiceStatut: {
        width: '90%',
        height: '25%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: '5%',
        marginTop: '5%',
        borderRadius: 10,
        shadowOpacity:2,
        shadowColor:'#eee',
        flexDirection: 'row',
        borderWidth:1,
        borderColor:'#088A4B',
        backgroundColor:'white',
    },
    textStatut: {
        fontSize: 22,
    },
    imageClient: {
        width: '25%',
        height: '90%',
        marginLeft:'50%',
    },
    imageChauffeur: {
        width: '18%',
        height: '90%',
        marginLeft:'38%',
    },

});

export default Statut;