import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../screens/Home/Main";
import NextStep from "../screens/Home/NextStep";
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Main} />
      <HomeStack.Screen name="NextStep" component={NextStep} />
    </HomeStack.Navigator>
  );
}
// const MainStack = ()=>{
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Main" component={Main}  options={{
//                 headerTitle: (props) => <LogoTitle {...props} />,
                
//              headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             /> )}}/>
//             <Stack.Screen name="NextStep" component={NextStep} />
//         </Stack.Navigator>
//     )
// }
export default HomeStackScreen