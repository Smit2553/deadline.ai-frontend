import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GroupItem = ({ group }) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupInfo}>
        <View style={styles.row}>
          <Ionicons
            name="clipboard-outline"
            size={24}
            color="#333333"
            style={styles.icon}
          />
          <Text style={styles.text}>Class: {group.class}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="people-outline"
            size={24}
            color="#333333"
            style={styles.icon}
          />
          <Text style={styles.text}>Group Size: {group.people}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={24}
            color="#333333"
            style={styles.icon}
          />
          <Text style={styles.text}>Location: {group.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    width: "100%",
  },
  groupInfo: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333333",
    marginLeft: 5,
  },
  icon: {},
});

export default GroupItem;
