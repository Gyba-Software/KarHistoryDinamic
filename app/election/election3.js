import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/cuento/terceraEleccion.mp3');

const scenes3 = ({ navigation }) => {
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
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {});

    return () => backHandler.remove();
}, []);

  const goToLeftPath3 = () => {
    navigation.replace('leftPath3');
  };

  const goToRigthPath3 = () => {
    navigation.replace('rigthPath3');
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.buttonScenes1} disabled={isAudioPlaying} onPress={goToLeftPath3}>
        <Image source={require('../../public/img/cuentos/3.png')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.buttonScenes2} disabled={isAudioPlaying} onPress={goToRigthPath3}>
        <Image source={require('../../public/img/cuentos/9.png')} style={[homeStyles.imageButton]} />
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default scenes3;
