import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

export const alert1 = (title, message) => {
  Alert.alert(title, message, [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};
export const alert2 = (title, message) => {
  Alert.alert(title, message, [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};
export const alert3 = (title, message) => {
  Alert.alert(title, message, [
    {
      text: "Yes",
      onPress: () => console.log("Yes Pressed"),
      style: "cancel",
    },
    { text: "No", onPress: () => console.log("No Pressed") },
    { text: "Skip", onPress: () => console.log("Skip Pressed") },
  ]);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
