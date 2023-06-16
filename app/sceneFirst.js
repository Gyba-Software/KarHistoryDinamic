import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/introduction.mp3');

const scenes1 = ({ navigation }) => {
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
      navigation.replace('home');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.botonEsena1} disabled={isAudioPlaying}>
        <Image source={require('../public/img/logo/logo.jpeg')} style={[homeStyles.buttonImage]} />
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.botonEsena2} disabled={isAudioPlaying}>
        <Image source={require('../public/img/logo/logo.jpeg')} style={[homeStyles.buttonImage]} />
      </TouchableOpacity>
    </View>
  );
};

export default scenes1;
