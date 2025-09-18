import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    minWidth: 80,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#333",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },

  inputLabel: {
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 16,
  },

  confirmButton: {
    backgroundColor: "#008000",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    width: "100%",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
