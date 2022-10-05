import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../components';
import {exit, signIn} from '../../store/actions/authActions';

const Signin = props => {
  const handleNaivgation = () => {
    props.signin();
  };
  const handkeExit = () => {
    props.exit();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <Button title={'Press'} onPress={() => handleNaivgation()} />
      <View style={styles.row}>
        <Text>Если нет аккаунта то, </Text>
        <TouchableOpacity onPress={()=>{}}>
          <Text style={styles.signUpBtn}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('STATE', state);
  return {isAuthorized: state.auth.isAuthorized};
};
const mapDispatchToProps = dispatch => {
  return {
    signin: () => dispatch(signIn()),
    exit: () => dispatch(exit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  signUpBtn: {
    color: 'blue',
  },
});
