import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Button title="Exemplo FlatList" onPress={() => navigation.navigate('FlatList')} />
      <Button title="Exemplo SectionList" onPress={() => navigation.navigate('SectionList')} />
      <Button title="Desafio Final" onPress={() => navigation.navigate('Desafio Final')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
