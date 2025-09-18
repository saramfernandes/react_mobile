import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface LetrasGameProps {
  letras: string;
}

export default function LetrasGame({ letras }: LetrasGameProps) {
  const [pontos, setPontos] = useState<{ [key: string]: string }>({});
  const jogadores = letras.split("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Pontos</Text>

      <View style={styles.inputsRow}>
        {jogadores.map((nome) => (
          <View key={nome} style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{nome}</Text>
            <TextInput
              style={styles.input}
              value={pontos[nome] || ""}
              onChangeText={(valor) =>
                setPontos((prev) => ({ ...prev, [nome]: valor }))
              }
              keyboardType="numeric"
            />
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => console.log(pontos)}
      >
        <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}
