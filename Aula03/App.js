import { StatusBar } from 'expo-status-bar';              // importa a barra de status do Expo
import { StyleSheet, Text, View } from 'react-native';    // importa componentes básicos do React Native

export default function App() {                           // função principal do app
  return (
    <View style={styles.container}>                       // container principal da tela
      <Text>Testando aula 3 do Fausto!</Text>             // exibe um texto
      <StatusBar style="auto" />                          // exibe a barra de status
    </View>
  );
}

const styles = StyleSheet.create({                        // criação dos estilos
  container: {
    flex: 1,                                              // ocupa a tela inteira
    backgroundColor: '#fff',                            // fundo branco
    alignItems: 'center',                                 // centraliza horizontalmente
    justifyContent: 'center',                             // centraliza verticalmente
  },
});
