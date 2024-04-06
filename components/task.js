import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const Task = ({ title, description, dueDate, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <View
      style={[
        styles.container,
        isCompleted ? styles.complete : styles.incomplete,
      ]}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.dueDate}>Due: {dueDate}</Text>
      </View>
      <TouchableOpacity onPress={toggleCompletion}>
        <Ionicon
          name={isCompleted ? "checkbox" : "checkbox-outline"}
          size={32}
          color={isCompleted ? "lightblue" : "red"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  incomplete: {
    borderColor: "red",
    borderWidth: 2,
  },
  complete: {
    borderColor: "lightblue",
    borderWidth: 2,
  },
  leftContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333333",
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: "#666666",
  },
  dueDate: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#999999",
  },
});

export default Task;
