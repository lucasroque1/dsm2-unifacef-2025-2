import { View, Image, StyleSheet, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.imagem} />
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 100, height: 100 }}
            />
            <FontAwesome name="home" size={80} color="blue" />
            <MaterialCommunityIcons name="horse-variant-fast" size={80} color="green" />
            <Button title="Perfil" onPress={() => navigation.navigate('Perfil')}/>
            <Button title="Galeria" onPress={() => navigation.navigate("Galeria")} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imagem: { width: 200, height: 200, resizeMode: 'contain' }
});