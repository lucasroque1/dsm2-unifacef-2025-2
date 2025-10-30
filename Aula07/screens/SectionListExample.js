import { SectionList, View, Text, StyleSheet } from 'react-native';

const cursos = [
  { title: 'DSM', data: ['João', 'Ana'] },
  { title: 'GE', data: ['Maria'] },
  { title: 'ADS', data: ['Pedro'] },
];

export default function SectionListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo com SectionList</Text>
      <SectionList
        sections={cursos}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  item: { fontSize: 18, paddingLeft: 10, paddingVertical: 2 },
});
