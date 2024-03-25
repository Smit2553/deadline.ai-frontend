import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import Task from "../components/task.js";
import TaskDetails from "../app/taskdetails.js"; // Import TaskDetails component
import { useRoute } from "@react-navigation/native";

const CalendarScreen = () => {
  const route = useRoute(); // Declare route variable with const
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]); // State to hold fetched tasks

  useEffect(() => {
    // Fetch tasks when the component mounts
    getAllTasks();
  }, []); // Empty dependency array to ensure effect runs only once

  const getAllTasks = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8000/tasks");
      const json = await response.json();

      // Map the fetched tasks to match the Task component's props
      const mappedTasks = json.map((task) => ({
        id: task.id, // Assuming each task has a unique ID
        title: task.summary,
        description: task.description,
        dueDate: new Date(task.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        completed: task.status === 1 ? true : false,
      }));

      // Update the tasks state with the fetched tasks
      setTasks(mappedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {tasks.map((task) => (
          <TouchableOpacity
            key={task.id} // Use unique task ID as the key
            onPress={() =>
              navigation.navigate("Task Details", {
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                completed: task.completed,
              })
            }
          >
            <Task
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              completed={task.completed}
            />
          </TouchableOpacity>
        ))}
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
