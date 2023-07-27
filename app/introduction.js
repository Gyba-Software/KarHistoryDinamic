import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/cuento/presentacion.mp3');

const Introduction = ({ navigation }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    let sound;

    const playSound = async () => {
      try {
        sound = new Audio.Sound();
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
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { });
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (!isAudioPlaying) {
      navigation.replace('newScenes');
    }
  }, [isAudioPlaying, navigation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const goToEsena1 = () => {
    navigation.replace('newScenes');
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.button} onPress={goToEsena1} disabled={isAudioPlaying}>
      <Image source={require('../public/img/fondos/Fondo1.png')} style={[homeStyles.imagenFondo]}></Image>
        <Image source={require('../public/img/cuentos/24.png')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 0 : 1 }]} />
        <Image source={require('../public/img/cuentos/31.png')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 1 : 0 }]} />
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;
