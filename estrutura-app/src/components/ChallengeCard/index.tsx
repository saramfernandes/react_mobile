import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ChallengeCardProps } from "./types";

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{challenge.text}</Text>
    </View>
  );
};
