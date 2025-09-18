import { View, Image, Button, StyleSheet } from 'react-native';

export default function Segu({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.imagem}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Início')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2ff' },
  imagem: { width: 150, height: 150 }
});