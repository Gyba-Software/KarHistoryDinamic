import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/introduction.mp3');

const leftPath3 = ({ navigation }) => {
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

    const goToFynalScenes = () => {
        navigation.replace('fynalScenes');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToFynalScenes} disabled={isAudioPlaying}>
                <Image source={require('../../public/img/escenas/Imagen17.jpg')} style={[homeStyles.imageIntro]} />
            </TouchableOpacity>
        </View>
    );
};

export default leftPath3;
