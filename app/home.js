import React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import Task from "../components/task.js";
import TaskDetails from "../app/taskdetails.js"; // Import TaskDetails component
import { useRoute } from "@react-navigation/native";

const CalendarScreen = () => {
  const route = useRoute(); // Declare route variable with const
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Task Details", {
              title: "Complete React Native tutorial",
              description: "Follow the steps to learn React Native",
              dueDate: "March 30, 2024",
            })
          }
        >
          <Task
            title="Complete React Native tutorial"
            description="Follow the steps to learn React Native"
            dueDate="March 30, 2024"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Task Details", {
              title: "Test", // Corrected spelling of "Test"
              description: "Test",
              dueDate: "March 30, 2024",
            })
          }
        >
          <Task title="Test" description="Test" dueDate="March 30, 2024" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
});

export default CalendarScreen;
