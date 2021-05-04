import React, {useMemo, useRef} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  // const panResponder = useMemo(
  //   () =>
  //     PanResponder.create({
  //       onStartShouldSetPanResponder: (evt, gestureState) => true,
  //       onPanResponderMove: (evt, gestureState) => {
  //         pan.setValue({x: gestureState.dx, y: gestureState.dy});
  //       },
  //       onPanResponderRelease: (evt, gestureState) => {
  //         Animated.spring(pan, {
  //           toValue: {
  //             x: 0,
  //             y: 0,
  //           },
  //           useNativeDriver: false,
  //         }).start();
  //       },
  //     }),
  //   [],
  // );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.purpleBox]}
      />
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
    backgroundColor: '#75CEBD',
    width: 150,
    height: 150,
  },
});
