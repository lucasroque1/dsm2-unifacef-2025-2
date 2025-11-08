import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imagem, setImagem] = useState(null);
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  async function abrirCamera() {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      {/* Exibe o avatar genérico ou a imagem escolhida */}
      <Image
        source={{
          uri: imagem
            ? imagem
            : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        }}
        style={styles.avatar}
      />

      <View style={styles.botoes}>
        <Button title="Tirar Foto" onPress={abrirCamera} />
        <Button title="Escolher da Galeria" onPress={abrirGaleria} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  botoes: {
    marginTop: 20,
    gap: 10,
  },
});
