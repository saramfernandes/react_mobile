import Slider from "@react-native-community/slider";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [tamanho, setTamanho] = useState<number>(0);
  return (
    <View style={styles.container}>
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
      <View style={[styles.bar, { height: `${tamanho}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
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
