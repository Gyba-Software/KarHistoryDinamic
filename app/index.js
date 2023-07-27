import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/cuento/Introduccion.mp3');

const Home = ({ navigation }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

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
    if (!isAudioPlaying) {
      navigation.replace('introduction');
    }
  }, [isAudioPlaying, navigation]);

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      backHandler.remove();
    };
  }, []);

  const goToIntroduction = () => {
    navigation.replace('introduction');
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.button} onPress={goToIntroduction} disabled={isAudioPlaying}>
        <Image source={require('../public/img/logo/Logo-Gyba.png')} style={[homeStyles.buttonImage]} />
        <Text style={homeStyles.texts}>Derechos Copyright© Reservados Desarrolladora de Software GYBA 2023</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
