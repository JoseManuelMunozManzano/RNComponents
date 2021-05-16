import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'red',
    background: 'white',
    card: 'green',
    text: 'pink',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      // Importante: lightTheme es una interacción con el mundo exterior, lo cual hace que
      //
      // return {
      //  ...lightTheme,
      // };
      //
      // constituya una mala práctica de programación.
      // Se deja así para verlo mås fácilmente, pero en realidad deberían de estar todas las propiedades de ligthTheme en el
      // return (como se ve más abajo) o enviar el Theme en el payload):
      //
      // return {
      //   currentTheme: 'light',
      //   dark: false,
      //   dividerColor: 'rgba(0,0,0,0.7)',
      //   colors: {
      //     primary: 'red',
      //     background: 'blue',
      //     card: 'green',
      //     text: 'pink',
      //     border: 'orange',
      //     notification: 'teal',
      //   },
      // };
      //

      return {
        ...lightTheme,
      };

    default:
      return state;
  }
};
