import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function App() {
  const CREDENTIALS_KEY = "demo.credentials";
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkCredentials = async () => {
      try {
        const credsJson = await SecureStore.getItemAsync(CREDENTIALS_KEY);
        if (credsJson) {
          setLoggedIn(true);
        }
      } catch (e) {
        console.error(e);
      }
    };
    checkCredentials();
  }, []);
  const login = async () => {
    if (!username || !password) {
      Alert.alert("Preencha usuário e senha!");
      return;
    }
    try {
      await SecureStore.setItemAsync(
        CREDENTIALS_KEY,
        JSON.stringify({ username, password })
      );
      setLoggedIn(true);
      setPassword("");
    } catch (e) {
      console.error(e);
      Alert.alert("Erro ao salvar credenciais");
    }
  };
  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync(CREDENTIALS_KEY);
      setLoggedIn(false);
      setUsername("");
      setPassword("");
    } catch (e) {
      console.error(e);
      Alert.alert("Erro ao apagar credenciais");
    }
  };
  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text>Login automático realizado (credenciais salvas).</Text>
        <View style={{ height: 16 }} />
        <Button title="Sair (logout)" onPress={logout} />
      </View>
    );
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <Button title="Entrar" onPress={login} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});
