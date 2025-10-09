import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  nome: string;
  compra?: number;
  venda?: number;
  variacao?: number;
};

export default function CardComponent({ nome, compra, venda, variacao }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      {compra && <Text>💸 Compra: {compra.toFixed(2)}</Text>}
      {venda && <Text>💰 Venda: {venda.toFixed(2)}</Text>}
      {variacao && (
        <Text
          style={{
            color: variacao >= 0 ? "green" : "red",
          }}
        >
          {variacao.toFixed(2)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  nome: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 6,
    color: "#222",
  },
});
