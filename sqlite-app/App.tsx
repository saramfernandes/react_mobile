import { StyleSheet, Text, View, TextInput, Button,FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";

const db = SQLite.openDatabaseSync("demo.db");

export default function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    db.execAsync(
      "CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);"
    );
    loadData();
  }, []);

  const loadData = async () => {
    const result = await db.getAllAsync<{ id: number; name: string }>(
      "SELECT * FROM people"
    );
    setItems(result);
  };
  const addPerson = async () => {
    if (name.trim() === "") return;
    await db.runAsync("INSERT INTO people (name) VALUES (?);", [name]);
    setName("");
    loadData();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5, marginTop: 50 }}
      />
      <Button title="Adicionar" onPress={addPerson} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function loadData() {
  throw new Error("Function not implemented.");
}
