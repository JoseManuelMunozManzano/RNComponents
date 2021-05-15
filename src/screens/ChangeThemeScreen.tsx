import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
