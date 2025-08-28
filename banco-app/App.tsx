import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState<string>('');
  const [idade, setIdade] = useState<number>(0);
  const [tamanho, setTamanho] = useState<number>(0);

  type Sexo = {
    id: number;
    nome: string;
  };
  const sexos: Sexo[] = [
    { id: 1, nome: "Masculino"},
    { id: 2, nome: "Feminino"},
    { id: 3, nome: "Outro (LGBTQIA+)"},
  ];
  
  const [selectedSexoId, setSelectedSexoId] = useState<number>(0);
  const selectedSexo = sexos.find((sexo) => sexo.id === selectedSexoId);


  const cadastroNome = (value: string) => {
    if (value !== '') {
      setNome(value);
    } else {
      setNome('Nome não registrado');
    }
  }
  const cadastroIdade = (value: string) => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      setIdade(num);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome: </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={cadastroNome}
      />
      <Text style={styles.label}>Idade: </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={cadastroIdade}
      />

      <Text style={styles.label}>Sexo:</Text>

      <Picker
        selectedValue={selectedSexoId}
        onValueChange={(itemValue) => setSelectedSexoId(Number(itemValue))}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um sexo" value={0} />
        {sexos.map((sexo) => (
          <Picker.Item key={sexo.id} label={sexo.nome} value={sexo.id} />
        ))}
      </Picker>

      <Text style={styles.text}>Ajuste a altura da barra: {tamanho}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={80}
        step={1}
        value={tamanho}
        onValueChange={setTamanho}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '50%',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  picker: {
    height: 30,
    width: 250,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
   text: {
    color: "#fff",
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  bar: {
    width: 50,
    backgroundColor: "yellow",
  },
  
});
