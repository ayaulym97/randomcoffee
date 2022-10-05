import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from '../../components';

const SignUp = ({navigation}) => {
  const handleNaivgation = () => {
    navigation.navigate('NextStep');
  };
  const formLabels = {
    name: 'ФИО',
    role: 'Роль',
    age: 'Возраст',
    gender: 'Пол',
  };
  const [form, setForm] = React.useState({
    name: '',
    role: '',
    age: '',
    gender: '',
  });
  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log({form})
  return (
    <View style={styles.container}>
      {Object.keys(form).map(key => (
        <TextInput
          key={key}
          mode="outlined"
          style={styles.txtInput}
          value={form[key]}
          label={formLabels[key]}
          onChangeText={value => handleChange(key, value)}
        />
      ))}
      <Button title={'Press'}  style={styles.btn} onPress={()=>handleNaivgation('App')}/>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {

    flex: 1,
 
    // marginHorizontal: '2.5%',
    // paddingTop: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  txtInput: {
    width:'90%',
    marginBottom: 16,
  
    // height:50
  },
  btn:{
    width:'90%',
    height:50,
    borderRadius:8
  }
});
