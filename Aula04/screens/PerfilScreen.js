import { View, Text, StyleSheet, Button } from 'react-native';                      // importa componentes

export default function PerfilScreen({ navigation }) {                              // tela de perfil
    return (
        <View style={styles.container}>                                             // container
            <Text style={styles.titulo}>Tela de Perfil</Text>                       // título
            <Button title="Voltar" onPress={() => navigation.goBack()} />           // botão para voltar
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },         // centralização
    titulo: { fontSize: 24, color: '#007AFF' }
});