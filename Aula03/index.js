import { registerRootComponent } from 'expo';              // importa função para registrar o app principal

import App from './App';                                   // importa o componente App

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);                                // registra o App como componente raiz
