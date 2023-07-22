import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/cuento/palmeras.mp3');

const leftPath1 = ({ navigation }) => {
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
            navigation.replace('scenes2');
        }
    }, [isAudioPlaying, navigation]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondImage(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const goToEsena1 = () => {
        navigation.replace('scenes2');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToEsena1} disabled={isAudioPlaying}>
                <Image source={require('../../public/img/cuentos/34.png')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 0 : 1 }]} />
                <Image source={require('../../public/img/cuentos/35.png')} style={[homeStyles.imageIntro, { opacity: showSecondImage ? 1 : 0 }]} />
            </TouchableOpacity>
        </View>
    );
};

export default leftPath1;
