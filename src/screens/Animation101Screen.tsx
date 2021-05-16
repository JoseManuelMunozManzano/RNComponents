import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          marginBottom: 20,
          opacity,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMovingPosition(100);
          }}
          color={colors.primary}
        />
        <Button title="FadeOut" onPress={fadeOut} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
});
