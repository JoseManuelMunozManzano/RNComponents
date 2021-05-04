import React, {useState} from 'react';
import {Platform, Switch, View} from 'react-native';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{marginTop: 100}}>
      <Switch
        trackColor={{false: '#d9d9db', true: '#5856d6'}}
        thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
