import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>

            <Text style={styles.title}>Lucas Roque Jacomine</Text>
            <Text style={styles.title}>Sistema de informação</Text>

            <Button
        title="Meus compromissos"
        onPress={() => navigation.navigate('Usuario')}
      />
      <Button
        title="Compromissos da equipe"
        onPress={() => navigation.navigate('Equipe')}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});