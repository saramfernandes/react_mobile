import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AlertCardProps } from "./types";
import { styles } from "./styles";

export default function AlertCard({ visible, onClose, onSelect }: AlertCardProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Novo Jogo</Text>
          <Text style={styles.subtitle}>Escolha uma opção:</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => onSelect("nos_eles")}>
              <Text style={styles.buttonText}>NÓS/ELES</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelect("letras")}>
              <Text style={styles.buttonText}>LETRAS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
