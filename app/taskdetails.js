import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const TaskDetails = () => {
  const route = useRoute();
  const { title, description, dueDate } = route.params;

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
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666666",
  },
  dueDate: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#999999",
  },
});

export default TaskDetails;
