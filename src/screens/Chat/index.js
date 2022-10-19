import React from 'react';
import LottieView from 'lottie-react-native';

import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import {Button} from '../../components';
import { exit, signIn } from '../../store/actions/authActions';

const Chat = (props) => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
     <LottieView source={require('../../img/lottie.json')} autoPlay loop />
      {/* <Button title={'Press'} onPress={()=>handleNaivgation()}/>
      <Button title={'EXIT'} onPress={()=>handkeExit()}/> */}
    </View>
  );
};

const mapStateToProps = state => {
    console.log("STATE",state)
    return{isAuthorized: state.auth.isAuthorized,}
  };
  const mapDispatchToProps = dispatch => {
   
    return {
        signin :()=>dispatch(signIn()),
        exit :()=>dispatch(exit())
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Chat);
