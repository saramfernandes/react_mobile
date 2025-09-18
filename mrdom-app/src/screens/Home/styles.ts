import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  cabecalho: {
    flexDirection: "row",
  },
  textoCabecalho: {
    flexDirection: "column",
  },
  foto: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
