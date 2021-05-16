import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState, useColorScheme} from 'react-native';

import {themeReducer, ThemeState, lightTheme, darkTheme} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: JSX.Element}) => {
  // Versión 1 que por ahora sólo funciona bien en iOS
  // const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    // Versión 1 que por ahora sólo funciona bien en iOS
    // colorScheme === 'dark' ? darkTheme : lightTheme,
    //
    // Versión 2 que funciona tanto en Android como en iOS
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  // Versión 1 que por ahora sólo funciona bien en iOS
  // useEffect(() => {
  //   if (colorScheme === 'dark') {
  //     setDarkTheme();
  //   } else {
  //     setLightTheme();
  //   }
  // }, [colorScheme]);

  // Versión 2 que funciona tanto en Android como en iOS
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
