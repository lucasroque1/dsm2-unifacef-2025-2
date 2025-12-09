import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Agenda</Text>
      <Text style={styles.nome}>Lucas Roque Jacomine</Text>
      <Text style={styles.turma}>Sistema de Informação</Text>

      <View style={styles.spacer} />

      <Button title="Compromissos do dia" onPress={() => navigation.navigate("Compromissos do dia")}      />
      <Button title="Compromissos da equipe" onPress={() => navigation.navigate("Compromissos da semana")}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  nome: { fontSize: 20, marginTop: 10 },
  turma: { fontSize: 18, marginBottom: 40 },
});