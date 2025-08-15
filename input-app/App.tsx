import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
const [numero1, setNumero1] = useState<number>(0);
const [numero2, setNumero2] = useState<number>(0);
const [resultado, setResultado] = useState<number>(0);
   const registraNumero1 = (value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setNumero1(num);
      setResultado(num + numero2); 
    }
  };

  const soma = (value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setNumero2(num);
      setResultado(numero1 + num); 
  };
}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        onChangeText={registraNumero1}
      />
      <Text style={styles.text}>+</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        onChangeText={soma}
      />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },

});
