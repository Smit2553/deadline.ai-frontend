import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid"; // Importing v4 method from uuid
import { useNavigation } from "@react-navigation/native";

export default function CreatePost({ route }) {
  const { setGroups } = route.params;
  const [classValue, setClassValue] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [location, setLocation] = useState("");
  const navigation = useNavigation();

  const createGroup = () => {
    const newGroup = {
      class: classValue,
      people: numberOfPeople,
      location,
      key: uuidv4(), // Generate a unique UUID key
    };
    setGroups((currentGroups) => [...currentGroups, newGroup]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          style={{ height: "100%", width: "100%", position: "absolute" }}
          source={require("../assets/background.png")}
        />
        <View style={{ alignItems: "center", marginTop: 100 }}>
          <Text style={styles.title}>Create a Group</Text>
          <TextInput
            style={styles.input}
            placeholder="Class"
            value={classValue}
            onChangeText={setClassValue}
          />
          <TextInput
            style={styles.input}
            placeholder="Number of People"
            value={numberOfPeople}
            onChangeText={setNumberOfPeople}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.button} onPress={createGroup}>
            <Text style={styles.buttonText}>Create Group</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
