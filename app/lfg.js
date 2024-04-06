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
import GroupItem from "../components/groupItem.js"; // Import GroupItem component
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LFG() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([
    { class: "Math 101", people: "5", location: "Library", key: "1" },
    { class: "History 202", people: "3", location: "Room 204", key: "2" },
    // Add more default groups as needed
  ]);

  const [classValue, setClassValue] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [location, setLocation] = useState("");

  const actions = [
    {
      text: "Delete Group",
      name: "bt_delete",
      position: 2,
      icon: <Ionicons name="trash-outline" size={24} color="white" />,
      color: "#ADD8E6",
    },
    {
      text: "Create Group",
      name: "bt_create",
      position: 1,
      icon: <Ionicons name="add-outline" size={24} color="white" />,
      color: "#ADD8E6",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          {groups.map((group, index) => (
            <GroupItem key={index} group={group} /> // Use GroupItem component
          ))}
        </View>
      </ScrollView>
      <View style={styles.fabContainer}>
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            if (name === "bt_create") {
              navigation.navigate("Create Group", { setGroups });
            }
          }}
          position="right"
          color="#ADD8E6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
