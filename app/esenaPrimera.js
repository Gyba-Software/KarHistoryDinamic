// Esena1.js
import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';

const Esena1 = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.replace('Inicio');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>Esta es la pantalla Esena1</Text>
    </View>
  );
};

export default Esena1;
