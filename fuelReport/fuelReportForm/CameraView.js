import React from 'react';
import {Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
const fieldNames = {
  name: 'ФИО',
  cardNumber: 'Номер карты',
  fuel: 'Тип топливо',
  refuelingDate: 'Дата заправки',
  volume: 'Обьем',
  carNumber: 'Номер машины',
  adometr: 'Адометр',
};

const CameraView = props => {
  const {modalVisible,hide} = props;

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          hide();
        }}
      >
     
      <TouchableOpacity style={styles.btn}>
        <Text>Отправить</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CameraView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2.5%',
    // borderWidth: 1,
  },
  header:{
    marginTop:16
  },
  input: {
    width: '95%',
    marginTop: 16,
  },
  btn: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 32,
  },
});
