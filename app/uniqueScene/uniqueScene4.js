import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/cuento/escapeDondeSalchicha.mp3');

const uniqueScene4 = ({ navigation }) => {
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
    const goToEsena1 = () => {
        navigation.replace('uniqueScene5');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToEsena1} disabled={isAudioPlaying}>
                <Image source={require('../../public/img/cuentos/42.png')} style={[homeStyles.imageIntro]} />
            </TouchableOpacity>
        </View>
    );
};

export default uniqueScene4;
