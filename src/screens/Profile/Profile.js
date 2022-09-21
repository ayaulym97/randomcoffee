import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { exit } from '../../store/actions/authActions';

const Profile = (props) => {
    const handleExit =()=>{
      props.exit()
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,borderWidth:1}}>
      <Text>
        Profile
      </Text>
      <TouchableOpacity style={{backgroundColor:'red',width:"80%",alignSelf:'center',marginVertical:20}} onPress={()=>handleExit()}>
        <Text style={{color:'white',padding:10,alignSelf:'center'}}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  console.log("STATE",state)
  return{isAuthorized: state.auth.isAuthorized,}
};
const mapDispatchToProps = dispatch => {
 
  return {
      exit :()=>dispatch(exit())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
