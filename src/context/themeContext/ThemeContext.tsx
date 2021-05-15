import React, {createContext} from 'react';

interface ThemeContextProps {
  theme: any; //TODO:
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: JSX.Element}) => {
  const theme = {};

  const setDarkTheme = () => {
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
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
