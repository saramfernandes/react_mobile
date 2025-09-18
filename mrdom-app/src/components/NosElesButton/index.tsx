import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { NosElesButtonProps } from "./types";

export default function NosElesButton({ onPress }: NosElesButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>CONFIRMAR JOGADORES</Text>
    </TouchableOpacity>
  );
}
