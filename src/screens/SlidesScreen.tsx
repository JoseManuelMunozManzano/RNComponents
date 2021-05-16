import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {useAnimation} from '../hooks/useAnimation';
import {RootStackParams} from '../navigation/Navigation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc:
      'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc:
      'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc:
      'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<RootStackParams, 'SlidesScreen'> {}

export const SlidesScreen = ({navigation}: Props): JSX.Element => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: Platform.OS === 'android' ? screenWidth * 0.8 : 350,
            height: 400,
            resizeMode: 'center',
          }}
        />

        <Text style={{...styles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={(item: {item: Slide}) => renderItem(item.item)}
        onSnapToItem={index => {
          setActiveSlide(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn(600);
          }
        }}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        {isVisible.current && (
          <Animated.View style={{opacity}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                alignItems: 'center',
                width: 140,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
