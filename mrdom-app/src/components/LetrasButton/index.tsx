import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { LetrasButtonProps } from "./types";

export default function LetrasButton({ onConfirm }: LetrasButtonProps) {
	const [letras, setLetras] = useState("");

	const handleConfirm = () => {
		if (letras.length === 3) {
			onConfirm(letras.toUpperCase());
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={letras}
				onChangeText={setLetras}
				maxLength={3}
				autoCapitalize="characters"
				placeholder="ABC"
			/>
			<TouchableOpacity style={styles.button} onPress={handleConfirm}>
				<Text style={styles.text}>CONFIRMAR JOGADORES</Text>
			</TouchableOpacity>
		</View>
	);
}
