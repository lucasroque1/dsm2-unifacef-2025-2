import { FlatList, View, Text, StyleSheet } from 'react-native';

const alunos = [
  { id: '1', nome: 'João', curso: 'DSM' },
  { id: '2', nome: 'Maria', curso: 'GE' },
  { id: '3', nome: 'Pedro', curso: 'ADS' },
  { id: '4', nome: 'Ana', curso: 'DSM' },
];

export default function FlatListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo com FlatList</Text>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome} - {item.curso}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 18, padding: 5, borderBottomWidth: 1, borderColor: '#ddd' },
});
