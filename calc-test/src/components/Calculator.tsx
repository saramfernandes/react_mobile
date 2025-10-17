import { add, sub, mul, div } from "../utils/math";
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const toNum = (s: string) => Number(s.replace(",", "."));
  const calcula = (op: (x: number, y: number) => number) => {
    try {
      const na = toNum(a);
      const nb = toNum(b);
      const r = op(na, nb);
      setResult(String(r));
    } catch (e: any) {
      setResult(e?.message ?? "error");
    }
  };
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        testID="input-a"
        placeholder="Número A"
        value={a}
        onChangeText={setA}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <TextInput
        testID="input-b"
        placeholder="Número B"
        value={b}
        onChangeText={setB}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <Button title="+" onPress={() => calcula(add)} />
        <Button title="-" onPress={() => calcula(sub)} />
        <Button title="×" onPress={() => calcula(mul)} />
        <Button title="÷" onPress={() => calcula(div)} />
      </View>
      <Text testID="result" style={{ marginTop: 16, fontSize: 18 }}>
        {result}
      </Text>
    </View>
  );
}
