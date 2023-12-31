import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, BackHandler, Text } from 'react-native';
import { Audio } from 'expo-av';

import homeStyles from '../../public/css/sharedStyle';

const audio = require('../../public/audio/cuento/Bambu.mp3');

const rigthPath2 = ({ navigation }) => {
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
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { });
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        if (!isAudioPlaying) {
            navigation.replace('scenes3');
        }
    }, [isAudioPlaying, navigation]);

    const goToEsena2 = () => {
        navigation.replace('scenes3');
    };

    return (
        <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.button} onPress={goToEsena2} disabled={isAudioPlaying}>
            <Image source={require('../../public/img/fondos/Fondo1.png')} style={[homeStyles.imagenFondo]}></Image>
                <Image source={require('../../public/img/cuentos/36.png')} style={[homeStyles.imageIntro]} />
            </TouchableOpacity>
        </View>
    );
};

export default rigthPath2;
