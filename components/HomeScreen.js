import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  useState,
  Text,
} from "react-native";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
