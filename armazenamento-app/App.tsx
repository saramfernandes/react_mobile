import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const COLORS = ["red", "green", "blue"];
  const STORAGE_KEY = "@selectedColor";
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const saveColor = async () => {
    if (selectedColor) {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, selectedColor);
      } catch (e) {
        console.log("Erro ao salvar cor:", e);
      }
    }
  };

  useEffect(() => {
    const loadColor = async () => {
      try {
        const savedColor = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedColor) {
          setSelectedColor(savedColor);
        }
      } catch (e) {
        console.log("Erro ao carregar cor:", e);
      }
    };
    loadColor();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma cor:</Text>
      {COLORS.map((color) => (
        <TouchableOpacity
          key={color}
          style={styles.radioContainer}
          onPress={() => setSelectedColor(color)}
        >
          <View
            style={[
              styles.radioCircle,
              selectedColor === color && { backgroundColor: color },
            ]}
          />
          <Text style={styles.radioText}>{color}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.saveButton} onPress={saveColor}>
        <Text style={styles.saveButtonText}>Salvar Cor</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.colorCircle,
          { backgroundColor: selectedColor || "gray" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  colorCircle: {
    marginTop: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    marginRight: 10,
  },
  radioText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
});
