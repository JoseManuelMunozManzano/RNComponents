import React, {useState} from 'react';
import {
  ScrollView,
  View,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  // const {top} = useSafeAreaInsets();

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
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          // Sólo para iOS.
          // Truco para mostrar el refresh con offset. Ver ActivityIndicator
          tintColor="transparent"
          style={{backgroundColor: '#5856D6'}}
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {/* Segunda parte del truco para ver offset en iOS */}
        {refreshing && (
          <View style={stylesScreen.centered}>
            <ActivityIndicator size="large" />
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
