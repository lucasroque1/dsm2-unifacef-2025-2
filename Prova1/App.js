import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Segu from './screens/Segu';
import Terc from './screens/Terc';
import Quart from './screens/Quart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Segunda" component={Segu} />
        <Stack.Screen name="Terceira" component={Terc} />
        <Stack.Screen name="Quarta" component={Quart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}