import { View, Text, StyleSheet, FlatList } from 'react-native'
import compromissos from '../data/compDia'

export default function compDia() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>11/11 (ter)</Text>
      <Text style={styles.nom}>Lucas Roque Jacomine</Text>
      <Text style={styles.turma}>Sistema de Informação</Text>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.descr}</Text>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  item: { fontSize: 18, marginBottom: 15 },
  nom: { fontSize: 18, textAlign: 'center' },
  turma: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
})
