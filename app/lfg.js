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
import Animated, { FadeInDown } from "react-native-reanimated";

export default function LFG() {
  

  

  const [groups, setGroups] = useState([
    { class: "Math 101", people: "5", location: "Library", key: '1' },
    { class: "History 202", people: "3", location: "Room 204", key: '2' },
    // Add more default groups as needed
  ]);

  // States for the form inputs
  const [classValue, setClassValue] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [location, setLocation] = useState("");

  const createGroup = () => {
    const newGroup = { 
      class: classValue, 
      people: numberOfPeople, 
      location, 
      key: String(groups.length + 1) // Generate a unique key based on the length
    };
    setGroups(currentGroups => [...currentGroups, newGroup]);
  };





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#f0f0f0', // Adds a light background color for the whole screen
    },
    text: {
      fontSize: 16, // Adjusted for consistency
      fontWeight: '500', // Not too bold, keeps it professional
      color: '#333', // Dark grey for better readability
      textAlign: 'center',
    },
    grouppost: {
      fontSize: 24, // Larger size for section titles
      fontWeight: 'bold', // Bold for emphasis
      color: '#333', // Dark grey for readability
      marginVertical: 20, // Adds vertical space around the title
    },
    groupInfo: {
      backgroundColor: '#ffffff', // Using white for a clean look
      padding: 15,
      borderRadius: 10,
      marginVertical: 8,
      shadowColor: "#000", // Adding shadow for depth
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Elevation for Android shadow
    },
    input: {
      borderColor: '#ccc', // Soft grey border
      borderWidth: 1,
      padding: 12,
      borderRadius: 10,
      width: '90%', // Reduced width for padding from screen edges
      color: '#333',
      backgroundColor: '#fff', // White background for the input
      fontSize: 16, // Consistent font size
      marginTop: 10, // Ensures consistent spacing between inputs
    },
    button: {
      backgroundColor: '#007bff', // A more professional blue
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 20,
      width: '90%', // Match input width for consistency
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });




  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={{ height: '100%', width: '100%', position: 'absolute' }}
        source={require("../assets/background.png")}
      />
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Text style={styles.grouppost}>Available Group</Text>
        {groups.map((group, index) => (
          <View key={index} style={styles.groupInfo}>
            <Text>Class: {group.class}</Text>
            <Text>Number of People: {group.people}</Text>
            <Text>Location: {group.location}</Text>
          </View>
        ))}
        <TextInput
          style={styles.input}
          placeholder="Class"
          placeholderTextColor={"gray"}
          onChangeText={setClassValue}
          value={classValue}
        />
        <TextInput
          style={[styles.input, { marginTop: 10 }]}
          placeholder="Number Of People"
          placeholderTextColor={"gray"}
          onChangeText={setNumberOfPeople}
          value={numberOfPeople}
        />
        <TextInput
          style={[styles.input, { marginTop: 10 }]}
          placeholder="Location"
          placeholderTextColor={"gray"}
          onChangeText={setLocation}
          value={location}
        />
       <TouchableOpacity onPress={createGroup} style={styles.button}>
  <Text style={styles.buttonText}>Create Group</Text>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
}
