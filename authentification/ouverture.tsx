import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
    //liste des images qui vont défiler
    require('@/assets/images/commande.png'),
    require('@/assets/images/course.png'),
    require('@/assets/images/home1.png'),
    require('@/assets/images/home2.png'),
];

const Ouverture = () => {
    const navigation = useNavigation();

    useEffect(() => {
        //temps pendant lequel mes images vont défiler
        const timer = setTimeout(() => {
            navigation.replace('Inscription');
        }, 9000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Swiper
            //faire défiler les images après 2 sec
                style={styles.wrapper}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                loop={true}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </Swiper>
            
                <Text style={styles.loadingText}>Chargement...</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        height: '70%',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
        textAlign:'center',
        bottom: 70,
    },
});

export default Ouverture;