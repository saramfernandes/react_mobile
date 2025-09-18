import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: 350, 
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: 350, 
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
