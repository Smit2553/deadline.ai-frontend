import React from "react";
import { View, StyleSheet, Text } from "react-native";

const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Group Screen</Text>
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

export default GroupScreen;
