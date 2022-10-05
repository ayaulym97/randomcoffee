import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Auth/Signin';
import SignUp from '../screens/Auth/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="SignUp" component={SignUp} />

  
    </AuthStack.Navigator>
  );
}
export default  AuthStackScreen;