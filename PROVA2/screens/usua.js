import { View, Text, Button, StyleSheet} from 'react-native';

export default function UsuarioScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.voltarBox}>
        <Button 
          title="Meus compromissos" 
          onPress={() => navigation.navigate("Início")}
        />
      </View>

      <Text style={styles.nome}>(Eu)</Text>

            <Text style={styles.title}>Lucas Roque Jacomine</Text>
            <Text style={styles.title}>Sistema de informação</Text>


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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },

  turma: {
    fontSize: 18,
    marginBottom: 30
  },

  horasBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  horasLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  horasTexto: {
    fontSize: 20,
    marginLeft: 6
  }

});
