import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function NosElesGame() {
  const [nos, setNos] = useState("");
  const [eles, setEles] = useState("");

  const confirmar = () => {
    console.log("Nós:", nos, "Eles:", eles);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Pontos</Text>
      <View style={styles.inputsRow}>
        <View style={styles.inputWrapper}>
          <Text>Nós</Text>
          <TextInput
            style={styles.input}
            value={nos}
            onChangeText={setNos}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Eles</Text>
          <TextInput
            style={styles.input}
            value={eles}
            onChangeText={setEles}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Button title="Confirmar" onPress={confirmar} color="#008000" />
    </View>
  );
}
