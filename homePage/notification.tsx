import react, {useState} from 'react';
import {View, Pressable,  StyleSheet, Button, Text,TouchableOpacity, Switch } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications'

// PushNotificationConfig.js
//import PushNotification  from react-native-push-notification


/*PushNotification.configure({
    onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios'
});

*/



const Notification = () =>{

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
   
  /*  const handleButtonPress = () => {
        PushNotification.localNotification({
            title: "Gomobil",
            message: "Autoriser l'application a vous envoyer des notifications",
            playSound: true,
            soundName: 'default',
            importance: 'high',
            vibrate: true,
        });
    };*/

    return (
        <View style = {styles.container}>
            <View style={styles.block2}>
                <Text>Afficer les notifications</Text>
                <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
       </View>
            <View style={styles.block1}>
                <Text>Son</Text>
                <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
      </View>
      
            <View style={styles.block}>
                <Text>Afficher un apercu</Text>
                <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        style={{paddingTop:5}}
      />
            </View>
            <View style={styles.text}>
            <Text>Afficher un apercu du text dans les notifications de nouveaux messages</Text>
            </View>
      </View>
    );
}
/*
async function handNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Appercu du texte",
            body:   "Activation",
        },
        trigger:{
            seconds: 2,
        }
    })
}

async function hondNotifications() {
*    await Notifications.scheduleNotificationAsync({
        content: {²
            title: "Activation du son",
            body:   "Autorisez le son des notification",
        },
        trigger:{
            seconds: 2,
        }
    })
}

async function hendNotifications() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Activation des notifications",
            body:   "Autorisez GOMOBIL a vous envoyez des notifications",
        },
        trigger:{
            seconds: 2,
        }
    })
}*/




const styles = StyleSheet.create({
    container:{
       // flex:1,
        //justifyContent:'center',
        //flexDirection:"column",
        alignItems:"center",
    },
    block1:{
        //flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        width:340,
        height:53,
        paddingTop:10,
        paddingLeft:10,
    },
    block2:{
        //flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderRadius:10,
        //marginTop:200,
        width:340,
        height:53,
        paddingTop:10,
        paddingLeft:10,
        marginTop:10,
    },
    block:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        width:340,
        height:53,
        paddingTop:10,
        paddingLeft:10,
    },
    text:{
        alignItems:"center",
    }
});


export default Notification;
