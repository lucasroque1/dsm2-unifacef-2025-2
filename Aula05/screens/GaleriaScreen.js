import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GaleriaScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="camera" size={40} color="purple" style={styles.icon} />
            <Text style={styles.title}>Minha Galeria</Text>
            <View style={styles.imagesContainer}>
                <Image
                    source={require("../assets/baixados.jpeg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/cidades-do-canada.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/imagens-de-paisagens.jpg")}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", backgroundColor: "#fff" },
    icon: { marginTop: 40 }, title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    imagesContainer: { flexDirection: "row", justifyContent: "space-around" },
    image: { width: 100, height: 100, marginHorizontal: 5, borderRadius: 10 },
});