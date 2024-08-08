import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  useState,
  Text,
  View,
} from "react-native";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";

export default function GameSizeSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>GameSizeSelect</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
