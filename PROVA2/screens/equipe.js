import { View, Text, Button, StyleSheet} from 'react-native';

export default function UsuarioScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.voltarBox}>
        <Button 
          title="Compromissos da equipe" 
          onPress={() => navigation.navigate("Início")}
        />
      </View>

      <Text style={styles.titulo}>Meus Compromissos</Text>

      <Text style={styles.nome}>Lucas Roque Jacomine</Text>

      <Text style={styles.turma}>Sistema de Informação</Text>

      <Text style={styles.eu}>(Eu)</Text>

      <View style={styles.horasBox}>
        <Text style={styles.horasLabel}>Horas:</Text>
        <Text style={styles.horasTexto}>Texto</Text>
      </View>

      <Text style={styles.subtitulo}>Jurema(chefe)</Text>
      <View style={styles.horasBox}>
        <Text style={styles.horasLabel}>Horas:</Text>
        <Text style={styles.horasTexto}>Texto</Text>
      </View>


      <Text style={styles.subtitulo}>Aderbal</Text>
        <View style={styles.horasBox}>
        <Text style={styles.horasLabel}>Horas:</Text>
        <Text style={styles.horasTexto}>Texto</Text>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },

  voltarBox: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },

  turma: {
    fontSize: 20,
    marginBottom: 4
  },

  eu: {
    fontSize: 16,
    marginBottom: 25
  },

  horasBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  horasLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  horasTexto: {
    fontSize: 20,
    marginLeft: 6
  },

  subtitulo: {
    fontSize: 20,
    marginTop: 10
  }

});