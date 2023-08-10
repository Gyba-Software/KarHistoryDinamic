import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/cuento/agradecimientos.mp3');

const fynalScenes = ({ navigation }) => {
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
            navigation.replace('electionFinal');
        }
    }, [isAudioPlaying, navigation]);

    const backAction = () => {
        return true;
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { });

        return () => backHandler.remove();
    }, []);

    const goToEsena1 = () => {
        navigation.replace('electionFinal');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToEsena1} disabled={isAudioPlaying}>
                <Image source={require('../public/img/fondos/Fondo2.png')} style={[homeStyles.imagenFondo]}></Image>
                <Image source={require('../public/img/fondos/Fondo3.png')} style={[homeStyles.buttonImage]} />
            </TouchableOpacity>
        </View>
    );
};

export default fynalScenes;