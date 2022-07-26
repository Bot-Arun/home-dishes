import { useState,useEffect } from 'react'
import {BackHandler, Modal, Alert,Text, TouchableOpacity} from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'
import {Screen} from './Screen'
const History = () =>{
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to quit the App?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
        
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);

    
    return (
      <Screen>
          
      </Screen>
    )
}
export default History;