import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const {icon, name} = menuItem;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={icon} color="#5856d6" size={23} />
        <Text style={styles.itemText}>{name}</Text>

        <View style={{flex: 1}} />

        <Icon name="chevron-forward-outline" color="#5856d6" size={23} />
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
