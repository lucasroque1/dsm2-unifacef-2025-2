import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lucas Roque Jacomine</Text>
            <Button                                                         
                title="Segunda tela"
                onPress={() => navigation.navigate('Segunda')}
            />
            <Button                                                         
                title="Terceira tela"
                onPress={() => navigation.navigate('Terceira')}
            />
            <Button                                                         
                title="Quarta tela"
                onPress={() => navigation.navigate('Quarta')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold' }
});