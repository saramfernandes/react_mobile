import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  type Prato = {
    id: string;
    nome: string;
    tipo: 'Comida' | 'Bebida' | 'Sobremesa';
    valor: number;
  };
  const menu: Prato[] = [
    { id: '1', nome: 'Macarronada', tipo: 'Comida', valor: 25.00 },
    { id: '2', nome: 'Suco de Laranja', tipo: 'Bebida', valor: 8.00 },
    { id: '3', nome: 'Torta de Limão', tipo: 'Sobremesa', valor: 12.00 },
    { id: '4', nome: 'Bife com Fritas', tipo: 'Comida', valor: 30.00 },
    { id: '5', nome: 'Refrigerante', tipo: 'Bebida', valor: 4.50 },

    { id: '6', nome: 'Lasanha Bolonhesa', tipo: 'Comida', valor: 32.00 },
    { id: '7', nome: 'Pizza Margherita', tipo: 'Comida', valor: 28.00 },
    { id: '8', nome: 'Sopa de Legumes', tipo: 'Comida', valor: 18.00 },
    { id: '9', nome: 'Hambúrguer Artesanal', tipo: 'Comida', valor: 27.00 },
    { id: '10', nome: 'Salada Caesar', tipo: 'Comida', valor: 20.00 },

    { id: '11', nome: 'Suco de Maracujá', tipo: 'Bebida', valor: 9.00 },
    { id: '12', nome: 'Cerveja Artesanal', tipo: 'Bebida', valor: 15.00 },
    { id: '13', nome: 'Água com Gás', tipo: 'Bebida', valor: 5.00 },
    { id: '14', nome: 'Vinho Tinto Taça', tipo: 'Bebida', valor: 22.00 },

    { id: '15', nome: 'Pudim de Leite', tipo: 'Sobremesa', valor: 10.00 },
    { id: '16', nome: 'Brownie com Sorvete', tipo: 'Sobremesa', valor: 16.00 },
    { id: '17', nome: 'Cheesecake de Frutas Vermelhas', tipo: 'Sobremesa', valor: 18.00 },
    { id: '18', nome: 'Petit Gâteau', tipo: 'Sobremesa', valor: 20.00 },

    { id: '19', nome: 'Risoto de Cogumelos', tipo: 'Comida', valor: 34.00 },
    { id: '20', nome: 'Frango Grelhado com Legumes', tipo: 'Comida', valor: 26.00 },
    { id: '21', nome: 'Moqueca de Peixe', tipo: 'Comida', valor: 38.00 },
    { id: '22', nome: 'Feijoada Completa', tipo: 'Comida', valor: 35.00 },
    { id: '23', nome: 'Strogonoff de Carne', tipo: 'Comida', valor: 28.00 },
    { id: '24', nome: 'Panqueca de Frango com Catupiry', tipo: 'Comida', valor: 22.00 },

    { id: '25', nome: 'Chá Gelado', tipo: 'Bebida', valor: 7.00 },
    { id: '26', nome: 'Café Expresso', tipo: 'Bebida', valor: 6.00 },
    { id: '27', nome: 'Milkshake de Morango', tipo: 'Bebida', valor: 14.00 },
    { id: '28', nome: 'Caipirinha', tipo: 'Bebida', valor: 18.00 },
    { id: '29', nome: 'Suco Detox Verde', tipo: 'Bebida', valor: 12.00 },

    { id: '30', nome: 'Mousse de Maracujá', tipo: 'Sobremesa', valor: 11.00 },
    { id: '31', nome: 'Sorvete 2 Sabores', tipo: 'Sobremesa', valor: 14.00 },
    { id: '32', nome: 'Creme Brûlée', tipo: 'Sobremesa', valor: 19.00 },
    { id: '33', nome: 'Canjica Doce', tipo: 'Sobremesa', valor: 9.00 },
    { id: '34', nome: 'Açaí na Tigela', tipo: 'Sobremesa', valor: 15.00 }
  ];

  const renderItem = ({ item }: { item: Prato }) => (
    <View style={styles.card}>
      <Text style={styles.name}> {item.nome} </Text>
      <Text style={styles.type}> Tipo: {item.tipo}</Text>
      <Text style={styles.price}> Preço: R$ {item.valor.toFixed(2)}</Text>
    </View>
  );

  return (
    <FlatList data={menu} renderItem={renderItem} keyExtractor={item => item.id}contentContainerStyle={styles.container}/>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    color: 'red',
  }

});
