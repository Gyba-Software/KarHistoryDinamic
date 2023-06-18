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
      navigation.replace('introduction');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const goToLeftPath1 = () => {
    navigation.replace('leftPath1');
  };

  const goToRigthPath1 = () => {
    navigation.replace('rigthPath1');
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.buttonScenes1} disabled={isAudioPlaying} onPress={goToLeftPath1}>
        <Image source={require('../public/img/escenas/Imagen4.jpg')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.buttonScenes2} disabled={isAudioPlaying} onPress={goToRigthPath1}>
        <Image source={require('../public/img/escenas/imagen6.jpg')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default scenes1;
