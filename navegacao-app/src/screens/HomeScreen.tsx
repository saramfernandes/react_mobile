import { Text, View, Button, TextInput } from "react-native";
import { Parametros } from "../tipos/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

interface Props {
  navigation: NativeStackNavigationProp<Parametros, "tela1">;
}
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tela principal</Text>
      <TextInput style={{ borderWidth: 1, width: 200, marginBottom: 10, borderRadius: 5, padding: 5, borderColor: 'pink' }} placeholder="Digite seu nome"
      value={nome} onChangeText={setNome} />
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("tela2", { nome })}
      />
    </View>
  );
};
export default HomeScreen;
