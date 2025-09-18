import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    width: 280,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonText: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
