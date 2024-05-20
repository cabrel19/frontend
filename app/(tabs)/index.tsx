import { Image, StyleSheet,Text, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';



export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#6f6463'}}
      headerImage={
        <Image
          source={require('@/assets/images/fond.png')}
          style={styles.fond}
        />
      }>
            <Text> BONJOUR</Text>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  fond: {
    height: 178,
    width: 600,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
