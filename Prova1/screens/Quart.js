import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Quart() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="blue" />
      <Ionicons name="star" size={50} color="green" />
      <Ionicons name="settings" size={50} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1 }
});