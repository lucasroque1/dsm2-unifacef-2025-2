import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TextInput, SectionList, StyleSheet, Dimensions } from 'react-native';

const produtos = [
  { nome: 'Notebook Dell', preco: 4500, categoria: 'Eletrônicos' },
  { nome: 'Smartphone Samsung', preco: 2800, categoria: 'Eletrônicos' },
  { nome: 'TV LG 50"', preco: 3200, categoria: 'Eletrônicos' },
  { nome: 'Camiseta Polo', preco: 90, categoria: 'Roupas' },
  { nome: 'Jaqueta Jeans', preco: 180, categoria: 'Roupas' },
  { nome: 'Calça Moletom', preco: 120, categoria: 'Roupas' },
  { nome: 'Geladeira Brastemp', preco: 3800, categoria: 'Eletrodomésticos' },
  { nome: 'Fogão Consul', preco: 1600, categoria: 'Eletrodomésticos' },
  { nome: 'Micro-ondas Philco', preco: 650, categoria: 'Eletrodomésticos' },
];

export default function final() {
  const [filtro, setFiltro] = useState('');
  const { width } = Dimensions.get('window');

  const produtosFiltrados = useMemo(() => {
    const filtrados = produtos.filter((p) =>
      p.nome.toLowerCase().includes(filtro.toLowerCase())
    );
    const categorias = [...new Set(filtrados.map((p) => p.categoria))];
    return categorias.map((cat) => ({
      title: cat,
      data: filtrados.filter((p) => p.categoria === cat),
    }));
  }, [filtro]);

  const renderItem = useCallback(({ item }) => (
    <View style={[styles.item, { padding: width * 0.03 }]}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  ), [width]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo Interativo de Produtos</Text>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome..."
        value={filtro}
        onChangeText={setFiltro}
      />

      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 8, marginBottom: 10,
  },
  header: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#eee', padding: 8 },
  item: { backgroundColor: '#f9f9f9', marginVertical: 4, borderRadius: 8 },
  nome: { fontSize: 16, fontWeight: 'bold' },
  preco: { fontSize: 15, color: '#666' },
});
