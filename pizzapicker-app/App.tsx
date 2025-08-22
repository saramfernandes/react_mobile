import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  type Pizza = {
    id: number;
    nome: string;
    valor: number;
  };
  const pizzas: Pizza[] = [
    { id: 1, nome: "Mussarela", valor: 25.0 },
    { id: 2, nome: "Calabresa", valor: 35.0 },
    { id: 3, nome: "Quatro Queijos", valor: 40.0 },
    { id: 4, nome: "Marguerita", valor: 25.0 },
  ];
  const [selectedPizzaId, setSelectedPizzaId] = useState<number>(0);
  const selectedPizza = pizzas.find((pizza) => pizza.id === selectedPizzaId);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha o seu sabor de pizza:</Text>

      <Picker
        selectedValue={selectedPizzaId}
        onValueChange={(itemValue) => setSelectedPizzaId(Number(itemValue))}
        style={styles.picker}
      >
        <Picker.Item label="Selecione uma pizza" value={0} />
        {pizzas.map((pizza) => (
          <Picker.Item key={pizza.id} label={pizza.nome} value={pizza.id} />
        ))}
      </Picker>

      <Text style={styles.selection}>
        Você selecionou:{" "}
        {selectedPizza
          ? `${selectedPizza.nome} - R$ ${selectedPizza.valor
              .toFixed(2)
              .replace(".", ",")}`
          : "Nenhuma"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
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
  selection: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
  },
});
