import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation'
import Final from './screens/final';
import Resultado from './screens/resultado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Validação de Formulário" component={FormValidation} />
        <Stack.Screen name="Desafio Final" component={Final} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};