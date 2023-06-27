import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './app/index';
import introduction from './app/introduction';
import newScenes from './app/newScenes/newScene';
import scenes1 from './app/sceneFirst';
import leftPath1 from './app/choiceScenes/leftPath1';
import rigthPath1 from './app/choiceScenes/ringthPath1';
import scenes2 from './app/election/election2';
import leftPath2 from './app/choiceScenes/leftPath2';
import rigthPath2 from './app/choiceScenes/ringthPath2';
import scenes3 from './app/election/election3';
import leftPath3 from './app/choiceScenes/leftPath3';
import rigthPath3 from './app/choiceScenes/ringthPath3';
import uniqueScene from './app/uniqueScene/uniqueScene';
import uniqueScene1 from './app/uniqueScene/uniqueScene1';
import uniqueScene2 from './app/uniqueScene/uniqueScene2';
import uniqueScene3 from './app/uniqueScene/uniqueScene3';
import uniqueScene4 from './app/uniqueScene/uniqueScene4';
import uniqueScene5 from './app/uniqueScene/uniqueScene5';
import uniqueScene6 from './app/uniqueScene/uniqueScene6';
import uniqueScene7 from './app/uniqueScene/uniqueScene7';
import uniqueScene8 from './app/uniqueScene/uniqueScene8';
import uniqueScene9 from './app/uniqueScene/uniqueScene9';
import uniqueScene10 from './app/uniqueScene/uniqueScene10';
import fynalScenes from './app/finay';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="introduction" component={introduction} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="newScenes" component={newScenes} options={{ title: '', headerShown: false, }} />
        
        <Stack.Screen name="scenes1" component={scenes1} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="leftPath1" component={leftPath1} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="rigthPath1" component={rigthPath1} options={{ title: '', headerShown: false, }} />

        <Stack.Screen name="scenes2" component={scenes2} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="leftPath2" component={leftPath2} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="rigthPath2" component={rigthPath2} options={{ title: '', headerShown: false, }} />

        <Stack.Screen name="scenes3" component={scenes3} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="leftPath3" component={leftPath3} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="rigthPath3" component={rigthPath3} options={{ title: '', headerShown: false, }} />

        <Stack.Screen name="uniqueScene" component={uniqueScene} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene1" component={uniqueScene1} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene2" component={uniqueScene2} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene3" component={uniqueScene3} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene4" component={uniqueScene4} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene5" component={uniqueScene5} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene6" component={uniqueScene6} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene7" component={uniqueScene7} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene8" component={uniqueScene8} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene9" component={uniqueScene9} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="uniqueScene10" component={uniqueScene10} options={{ title: '', headerShown: false, }} />

        <Stack.Screen name="fynalScenes" component={fynalScenes} options={{ title: '', headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

