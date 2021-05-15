import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';

import {Navigation} from './src/navigation/Navigation';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: '',
    // background: 'black',
    // card: '',
    // text: '',
    // border: '',
    // notification: '',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
