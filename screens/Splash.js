import React from 'react';
import { View,Text, ScrollView,  Image, StyleSheet,Button,TextInput} from 'react-native';


const img = require('../assets/AutoShow.png');


export default function Splash () {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#004B87',
            padding:20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '50%',
            height: 300,
            resizeMode:'contain'
          }
    });

    return(
        
        <View style={styles.container}>
            
            <Image style={styles.image} source={img} />
        </View>
        
    )
}