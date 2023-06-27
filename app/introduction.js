import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../public/css/sharedStyle';

const audio = require('../public/audio/cuento/cuento1.mp3');

const introduction = ({ navigation }) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(true);
    const [showSecondImage, setShowSecondImage] = useState(false);

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
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { });
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondImage(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const goToEsena1 = () => {
        navigation.replace('newScenes');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToEsena1} disabled={isAudioPlaying}>
                <Image source={require('../public/img/portada/Portada.jpg')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 0 : 1 }]} />
                <Image source={require('../public/img/portada/portada2.png')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 1 : 0 }]} />
            </TouchableOpacity>
        </View>
    );
};

export default introduction;
