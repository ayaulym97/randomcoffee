import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
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
const CustomHeader = ({text,size=16,style})=>{
  return(
    <Text style={[{fontSize:size},{fontWeight:'500'},style]}>{text}</Text>
  )
}
const ReportFormView = props => {
  const {form,handleChange} = props;
 
  const fuelType = [
    {type: '1', name: 'Диз топливо летнее'},
    {type: '2', name: 'Диз топливо зимнее'},
    {type: '3', name: 'АИ92'},
  ];
  return (
    <View style={styles.container}>
      <CustomHeader size={24} text="Создание ГСМ отчета" style={styles.header}/>
      {Object.keys(form).map(item => (
        <TextInput
          key={item}
          mode="outlined"
          style={styles.input}
          label={fieldNames[item]}
          value={form[item]}
          onChangeText={(value)=>handleChange(item,value)}
          render={(props)=>form[item]==="name"?<Text>GGG</Text>:null}
        />
      ))}
      <TouchableOpacity style={styles.btn}>
        <Text>Отправить</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportFormView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2.5%',
    borderWidth: 1,
  },
  header:{
    marginTop:16
  },
  input: {
    // width: '95%',
    marginTop: 16,
  },
  btn: {
    // width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 32,
  },
});
