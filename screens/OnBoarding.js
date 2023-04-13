import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = require('../assets/Cars/car3.png');

const OnBoarding = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Welcome to Auto Show Event!</Text>
      <Button
        title=">>>> Swipe to get started"
        color="#f194ff"
        fontSize='20'
      />    
      </ImageBackground>
  </View>
);





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    marginBottom: 80
  }
});

export default OnBoarding;