import { View, Image, StyleSheet, Button } from 'react-native';             // componentes
import FontAwesome from '@expo/vector-icons/FontAwesome';                   // ícone FontAwesome
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';     // ícone Material

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.imagem} />      // imagem local
            <Image                                                                      // imagem da web
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 100, height: 100 }}
            />
            <FontAwesome name="home" size={80} color="blue" />                              // ícone home
            <MaterialCommunityIcons name="horse-variant-fast" size={80} color="green" />    // ícone cavalo
            <Button title="Perfil" onPress={() => navigation.navigate('Perfil')}/>
            <Button title="Galeria" onPress={() => navigation.navigate("Galeria")} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imagem: { width: 200, height: 200, resizeMode: 'contain' }                               // estilo da logo
});