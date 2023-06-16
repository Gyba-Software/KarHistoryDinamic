import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './app/index';
import introduction from './app/introduction';
import scenes1 from './app/sceneFirst';
import leftPath1 from './app/choiceScenes/leftPath1';
import rigthPath1 from './app/choiceScenes/ringthPath1';
import scenes2 from './app/election/election2';
import leftPath2 from './app/choiceScenes/leftPath2';
import rigthPath2 from './app/choiceScenes/ringthPath2';
import scenes3 from './app/election/election3';
import leftPath3 from './app/choiceScenes/leftPath3';
import rigthPath3 from './app/choiceScenes/ringthPath3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="introduction" component={introduction} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="scenes1" component={scenes1} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="leftPath1" component={leftPath1} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="rigthPath1" component={rigthPath1} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="scenes2" component={scenes2} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="leftPath2" component={leftPath2} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="rigthPath2" component={rigthPath2} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="scenes3" component={scenes3} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="leftPath3" component={leftPath3} options={{ title: '', headerShown: false,}} />
        <Stack.Screen name="rigthPath3" component={rigthPath3} options={{ title: '', headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

