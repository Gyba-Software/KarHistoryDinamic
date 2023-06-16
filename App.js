import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './app/index';
import introduction from './app/introduction';
import scenes1 from './app/sceneFirst';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="introduction" component={introduction} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="scenes1" component={scenes1} options={{ title: '', headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

