import { View, Text, StyleSheet, SectionList } from 'react-native'
import compromissos from '../data/compromissosSemana'

export default function compSemana() {

  const sections = compromissos.map(sec => ({
    title: sec.titulo,
    data: sec.dados
  }))

  return (
    <View style={styles.container}>

      <Text style={styles.nom}>Lucas Roque Jacomine</Text>
      <Text style={styles.turma}>Sistema de Informação</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  item: { fontSize: 18, marginTop: 10 },
  nom: { fontSize: 18, textAlign: 'center' },
  turma: { fontSize: 18, textAlign: 'center', marginBottom: 15 },
})