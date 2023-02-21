/**
 * @format
*/


import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
//            await AsyncStorage.setItem('title', remoteMessage.notification.title);
//            console.log(await AsyncStorage.getItem('title'));
        });
        messaging().onMessage(async remoteMessage => {
            let message_body = remoteMessage.notification.body;
            let message_title = remoteMessage.notification.title;
            let data1 = remoteMessage.notification.title;
            let data2 = remoteMessage.notification.body;
            //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            Alert.alert(`${data1}\n${data2}`);
        });

AppRegistry.registerComponent(appName, () => App);
