import { useState } from "react";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import AlertCard from "../../components/AlertCard";
import { styles } from "./styles";
import NosElesButton from "../../components/NosElesButton";
import NosElesGame from "../../components/NosElesGame";
import LetrasButton from "../../components/LetrasButton";
import LetrasGame from "../../components/LetrasGame";

export default function HomeScreen() {
  const [showLetrasButton, setShowLetrasButton] = useState(false);
  const [showLetrasGame, setShowLetrasGame] = useState(false);
  const [letrasJogadores, setLetrasJogadores] = useState<string>("");
  const [showNosElesGame, setShowNosElesGame] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [showNosElesBtn, setShowNosElesBtn] = useState(false);

  const handleSelect = (option: string) => {
    if (option === "nos_eles") {
      setShowNosElesBtn(true);
      setShowLetrasButton(false);
      setShowLetrasGame(false);
    } else if (option === "letras") {
      setShowLetrasButton(true);
      setShowNosElesBtn(false);
      setShowLetrasGame(false);
    } else {
      setShowNosElesBtn(false);
      setShowLetrasButton(false);
      setShowLetrasGame(false);
    }
    setAlertVisible(false);
  };

  const handleConfirmPlayers = () => {
    Alert.alert("Jogadores confirmados!");
  };

  const handleNosElesPress = () => {
    setShowNosElesGame(true);
    return () => {};
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image
          source={require("../../assets/images/vo.png")}
          style={styles.foto}
          resizeMode="contain"
        />
        <View style={styles.textoCabecalho}>
          <Text style={styles.titulo}>Mr DOM</Text>
          <Text style={styles.subtitulo}>Família Fernandes</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShowLetrasButton(false);
          setShowLetrasGame(false);
          setLetrasJogadores("");
          setShowNosElesBtn(false);
          setShowNosElesGame(false);
          setAlertVisible(true);
        }}
      >
        <Text style={styles.buttonText}>NOVO JOGO</Text>
      </TouchableOpacity>

      {showNosElesBtn &&
        !showNosElesGame &&
        !showLetrasButton &&
        !showLetrasGame && <NosElesButton onPress={handleNosElesPress} />}

      {showNosElesGame && <NosElesGame />}

      {showLetrasButton && !showLetrasGame && (
        <LetrasButton
          onConfirm={(letras) => {
            setLetrasJogadores(letras);
            setShowLetrasButton(false);
            setShowLetrasGame(true);
          }}
        />
      )}

      {showLetrasGame && <LetrasGame letras={letrasJogadores} />}

      <AlertCard
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
        onSelect={handleSelect}
      />
    </View>
  );
}
