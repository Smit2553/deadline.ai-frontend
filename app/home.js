import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Task from "../components/task.js";
import { useRoute } from "@react-navigation/native";
import axios from "axios"; // Changed import to axios

const CalendarScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const response = await axios.get("http://192.168.1.8:8000/weekly_tasks/"); // Changed Axios to axios
      const json = response.data;
      const mappedTasks = json.map((task) => ({
        id: task.id,
        title: task.summary,
        description: task.description,
        dueDate: new Date(task.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        completed: task.status === 1 ? true : false,
      }));

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
            key={task.id}
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
