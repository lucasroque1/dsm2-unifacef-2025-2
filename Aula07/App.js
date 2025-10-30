import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FlatListExample from './screens/FlatListExample';
import SectionListExample from './screens/SectionListExample';
import final from './screens/final';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="FlatList" component={FlatListExample} />
        <Stack.Screen name="SectionList" component={SectionListExample} />
        <Stack.Screen name="Desafio Final" component={final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
