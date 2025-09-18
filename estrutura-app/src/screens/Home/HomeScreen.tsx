import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ChallengeCard } from "../../components/ChallengeCard";
import { useState } from "react";
import { getRandomChallenge } from "../../services/challengeService";
import { useScore } from "../../hooks/useScore";

export default function HomeScreen() {
  const [currentChallenge, setCurrentChallenge] = useState(
    getRandomChallenge()
  );
  const [nome, setNome] = useState<string>("");
  const { score, addPoint, removePoint } = useScore();

  const handleCumpriu = () => {
    addPoint();
    setCurrentChallenge(getRandomChallenge());
  };

  const handleDesistiu = () => {
    removePoint();
    setCurrentChallenge(getRandomChallenge());
  };

  return (
    <View>
      <Image
        source={require("../../assests/images/logo-peppa.png")}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />

      <ChallengeCard challenge={currentChallenge} />

      <TextInput
        style={styles.input}
        placeholder="Nome do jogador"
        onChangeText={setNome}
      />

      <View style={styles.lado}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#20B2AA" }]}
          onPress={handleCumpriu}
        >
          <Text style={styles.buttonText}>Cumpriu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#CD5C5C" }]}
          onPress={handleDesistiu}
        >
          <Text style={styles.buttonText}>Desistiu</Text>
        </TouchableOpacity>
      </View>
      

      <Text style={styles.text}>Jogador: {nome}</Text>
      <Text style={styles.text}>Pontos: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#888",
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  lado: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
