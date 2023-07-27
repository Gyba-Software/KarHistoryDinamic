import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/cuento/segundaEleccion.mp3');

const scenes2 = ({ navigation }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  useEffect(() => {
    let sound = new Audio.Sound();

    const playSound = async () => {
      try {
        await sound.loadAsync(audio);
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      } catch (error) {
        console.log('Error al cargar el audio', error);
      }
    };

    const onPlaybackStatusUpdate = (status) => {
      if (status.didJustFinish) {
        setIsAudioPlaying(false);
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

  useEffect(() => {
    const backAction = () => {
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const goToLeftPath2 = () => {
    navigation.replace('rigthPath2');
  };

  const goToRigthPath2 = () => {
    navigation.replace('leftPath2');
  };

  return (
    <View style={homeStyles.container}>
      <Image source={require('../../public/img/fondos/Fondo1.png')} style={[homeStyles.imagenFondo]}></Image>
      <TouchableOpacity style={homeStyles.buttonScenes1} disabled={isAudioPlaying} onPress={goToLeftPath2}>
        <Image source={require('../../public/img/cuentos/1.png')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.buttonScenes2} disabled={isAudioPlaying} onPress={goToRigthPath2}>
        <Image source={require('../../public/img/cuentos/7.png')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default scenes2;
