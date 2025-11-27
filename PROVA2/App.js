import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import equipe from './screens/equipe';
import usua from './screens/usua';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Equipe" component={equipe} />
        <Stack.Screen name="Usuario" component={usua} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};