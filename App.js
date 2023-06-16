import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './app/inicial';
import Esena1 from './app/esenaPrimera';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="Esena1" component={Esena1} options={{ title: '', headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

