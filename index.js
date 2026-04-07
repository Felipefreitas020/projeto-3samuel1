import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={TabRoutes} />
    </Stack.Navigator>
  );
}