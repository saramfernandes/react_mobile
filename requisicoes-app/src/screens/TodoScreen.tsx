import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import api from "../api/api";
import TodoItem from "../components/TodoItem";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // GET
  const fetchTodos = async () => {
    try {
      const response = await api.get<Todo[]>("/todos?_limit=5");
      setTodos(response.data);
    } catch (error) {
      console.error("Erro ao carregar todos:", error);
    }
  };

  // POST
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const response = await api.post<Todo>("/todos", {
        title: newTodo,
        completed: false,
      });
      setTodos([response.data, ...todos]);
      setNewTodo("");
    } catch (error) {
      console.error("Erro ao adicionar todo:", error);
    }
  };

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    );
  };

  // DELETE
  const deleteTodo = async (id: number) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar todo:", error);
    }
  };

  // PATCH - atualizar título
  const updateTodo = async (id: number, newTitle: string) => {
    try {
      await api.patch(`/todos/${id}`, { title: newTitle });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      );
    } catch (error) {
      console.warn("API não suporta update real, atualizando localmente...");
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      );
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 Lista de Tarefas</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Adicionar" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            completed={item.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop: 50 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  inputRow: { flexDirection: "row", marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, padding: 8, marginRight: 8 },
});