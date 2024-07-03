import react, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native'

import Back from '@/components/btnBack';

const NotificationChauffeur = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);


    return (
        <View style={styles.container}>
            <Back />
            <View style={styles.block}>
                <Text style={{ fontSize: 17, }}>Afficher les notifications</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#088A4B' }}
                    thumbColor={isEnabled ? 'black' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.block}>
                <Text style={{ fontSize: 17 }}>Son</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#088A4B' }}
                    thumbColor={isEnabled1 ? 'black' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
    },

    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: '#088A4B',
        alignItems: 'center',
        borderRadius: 10,
        width: '85%',
        height: '8%',
        padding: '3%',
        marginTop: '8%',
    },

    text: {
        alignItems: "center",
    }
});


export default NotificationChauffeur;