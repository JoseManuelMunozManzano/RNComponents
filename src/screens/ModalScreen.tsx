import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="ModalScreen" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent>
        {/* Background */}
        <View
          style={{
            // height: 100,
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* Contenido del modal */}
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
