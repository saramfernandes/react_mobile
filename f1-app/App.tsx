import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import api from './src/api/Api';

type Pais = {
  id: number;
  nome: string;
};

export default function App() {
  const [paises, setPaises] = useState<Pais[]>([]);

  const fetchPaises = async () => {
    try {
      const response = await api.get("/paises");
      setPaises(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Erro ao carregar países:', error);
    }
  };

  useEffect(() => {
    fetchPaises();
  }, []);

  const renderCard = ({ item }: { item: Pais }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardSubtitle}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={paises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    elevation: 3, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
