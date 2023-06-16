import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text  } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/introduction.mp3');

const home = ({ navigation }) => {
  useEffect(() => {
    let sound = new Audio.Sound();

    const playSound = async () => {
      try {
        await sound.loadAsync(audio);
        await sound.playAsync();
      } catch (error) {
        console.log('Error al cargar el audio', error);
      }
    };

    const backAction = () => {
      return true;
    };

    playSound();

    return () => {
      sound.unloadAsync();
    };
  }, []);

  const backAction = () => {
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  const goToEsena1 = () => {
    navigation.replace('scenes1');
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.button} onPress={goToEsena1}>
        <Image source={require('../public/img/logo/logo.jpeg')} style={[homeStyles.buttonImage]} />
        <Text style={homeStyles.texts}>Derechos Copyright© Reservados Desarrolladora de Software GYBA</Text>  
      </TouchableOpacity>
    </View>
  );
};

export default home;
