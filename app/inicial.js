// Inicio.js
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text  } from 'react-native';
import { Audio } from 'expo-av';

import inicioEstilos from '../public/css/estilos';

const audio = require('../public/audio/inicio.mp3');

const Inicio = ({ navigation }) => {
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
    navigation.replace('Esena1');
  };

  return (
    <View style={inicioEstilos.container}>
      <TouchableOpacity style={inicioEstilos.button} onPress={goToEsena1}>
        <Image source={require('../public/img/logo/logo.jpeg')} style={[inicioEstilos.buttonImage]} />
        <Text style={inicioEstilos.texto}>Derechos Copyright© Reservados Desarrolladora de Software GYBA</Text>  
      </TouchableOpacity>
    </View>
  );
};

export default Inicio;
