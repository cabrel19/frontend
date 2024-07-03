import react, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native'

import Back from '@/components/btnBack';

const Notification = () => {

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
                    style={{ marginLeft: '28%' }}
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
                    style={{ marginLeft: '75%' }}
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
        marginTop: '5%',
        alignSelf: 'center',
        alignItems:'center',
        height: '8%',
        width: "90%",
        backgroundColor: 'white',
        borderRadius:10,
        shadowOpacity:2,
        shadowColor:'#eee',
        flexDirection:'row',
        padding:'3%',
    },

    text: {
        alignItems: "center",
    }
});


export default Notification;