import * as React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileStack from './ProfileStack';
import HomeStackScreen from './HomeStack';
import AuthStackScreen from './AuthStack';
import Chat from '../screens/Chat';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function TabNav(props) {
  console.log('props.isAuthorized', props.isAuthorized);
  const [data, setData] = React.useState(false);

  React.useEffect(() => {
    setData(props.isAuthorized);
  }, [props.isAuthorized]);
  return (
    <React.Fragment>
      {data ? (
        <Tab.Navigator screenOptions={{headerShown: false}} defaultScreenOptions={{   tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',}} >
          <Tab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Главная',
              tabBarLabelStyle: {color: 'green'},
              // tabBarIcon: ({focused, color, size}) => {
              //   return (
              //     <Icon
              //       name={'home'}
              //       size={25}
              //       color={focused ? 'green' : 'gray'}
              //     />
              //   );
              // },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            }}
          />
          <Tab.Screen name="Chat" component={Chat}   options={{
              tabBarLabel: 'Сообщение',
              // tabBarLabelStyle: {color: 'green'},
              // tabBarIcon: ({focused, color, size}) => {
              //   return (
              //     <Icon
              //       name={'chat'}
              //       size={25}
              //       color={focused ? 'green' : 'gray'}
              //     />
              //   );
              // },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
           
            }} />
          <Tab.Screen name="ProfileStack" component={ProfileStack}   options={{
              tabBarLabel: 'Профиль',
             
              tabBarLabelStyle:({focused}) =>{return{color:focused? 'green':'gray'}},
              // tabBarIcon: ({focused, color, size}) => {
              //   return (
              //     <Icon
              //       name={'person'}
              //       size={25}
              //       color={focused ? 'green' : 'gray'}
              //     />
              //   );
              // },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
            }} />
        </Tab.Navigator>
      ) : (
        <AuthStackScreen />
      )}
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  console.log('STATE', state);
  return {isAuthorized: state.auth.isAuthorized};
};

export default connect(mapStateToProps)(TabNav);
