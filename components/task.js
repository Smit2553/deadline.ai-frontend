import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ title, description, dueDate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.dueDate}>Due: {dueDate}</Text>
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
