import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  icon: string;
  name: string;
  components: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.name} - {menuItem.icon}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item, index}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
