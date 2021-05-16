import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {icon, name} = menuItem;

  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={23} />
        <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
