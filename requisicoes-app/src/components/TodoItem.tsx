import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";

type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void;
};

export default function TodoItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  onUpdate,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  return (
    <View style={styles.row}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedTitle}
          onChangeText={setEditedTitle}
          onBlur={() => {
            setIsEditing(false);
            if (editedTitle !== title) onUpdate(id, editedTitle);
          }}
          autoFocus
        />
      ) : (
        <Text
          style={[
            styles.text,
            completed && { textDecorationLine: "line-through", color: "gray" },
          ]}
        >
          {title}
        </Text>
      )}

      <View style={styles.actions}>
        <Button
          title={completed ? "↩️" : "✅"}
          onPress={() => onToggle(id, completed)}
        />
        <Button
          title="✏️"
          onPress={() => setIsEditing(true)}
        />
        <Button
          title="❌"
          color="gray"
          onPress={() => onDelete(id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 4,
  },
});