import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Parametros } from "../tipos/navigation";

interface Props {
  route: RouteProp<Parametros, "tela2">;
}
const DetailScreen: React.FC<Props> = ({ route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nome informado: {route.params.nome}</Text>
    </View>
  );
};

export default DetailScreen;
