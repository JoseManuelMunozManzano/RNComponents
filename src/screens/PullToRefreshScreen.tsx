import React, {useContext, useState} from 'react';
import {
  ScrollView,
  View,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  // const {top} = useSafeAreaInsets();
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  return (
    <ScrollView
      // style={{
      //   marginTop: refreshing ? top : 0,
      // }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // Solo para Android
          progressViewOffset={10}
          progressBackgroundColor={colors.text}
          colors={[colors.background]}
          // Sólo para iOS.
          // Truco para mostrar el refresh con offset. Ver ActivityIndicator
          tintColor={
            Platform.OS === 'android'
              ? dark
                ? 'white'
                : 'black'
              : 'transparent'
          }
          // style={{backgroundColor: colors.primary}}
          // title="Refreshing"
          // titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {/* Segunda parte del truco para ver offset en iOS */}
        {refreshing && Platform.OS === 'ios' && (
          <View style={stylesScreen.centered}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

const stylesScreen = StyleSheet.create({
  centered: {
    flex: 1,
  },
});
