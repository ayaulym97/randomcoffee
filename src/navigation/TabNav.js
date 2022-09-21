import * as React from 'react';
import { connect } from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileStack from './ProfileStack';
import HomeStackScreen from './HomeStack';
import AuthStackScreen from './AuthStack';
import Chat from '../screens/Chat';
const Tab = createBottomTabNavigator();

 function TabNav(props) {
  console.log("props.isAuthorized",props.isAuthorized)
  const [data,setData] = React.useState(false)
 
  React.useEffect(()=>{
    setData(props.isAuthorized)
  },[props.isAuthorized])
  return (
    <React.Fragment>
      {data ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="ProfileStack" component={ProfileStack} />
       
        </Tab.Navigator>
      ) : (
        <AuthStackScreen />
      )}
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  console.log("STATE",state)
  return{isAuthorized: state.auth.isAuthorized,}
};

export default connect(mapStateToProps)(TabNav);