import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditProfile from '../screens/Profile/EditProfile';
import Profile from '../screens/Profile/Profile';
const Stack = createNativeStackNavigator();

const ProfileStack = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    )
}
export default ProfileStack