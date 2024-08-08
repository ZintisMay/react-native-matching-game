import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";

import { StyleSheet, SafeAreaView, Text, View, Pressable } from "react-native";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";

import { StateContext } from "./State";

export default function Counter() {
  let { count, increment, decrement } = useContext(StateContext);
  // let [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>
      <Pressable
        onPressIn={() => {
          increment();
        }}
      >
        Up
      </Pressable>
      <Pressable
        onPressIn={() => {
          decrement();
        }}
      >
        Down
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
