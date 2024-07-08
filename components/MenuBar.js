import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  useState,
  Pressable,
  Text,
} from "react-native";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";

export default function MenuBar(props) {
  const menuEntries = Object.values(props.menuItems);
  const setView = props.setView;
  return (
    <SafeAreaView style={styles.container}>
      {menuEntries.map((item, index) => (
        <Pressable
          style={styles.button}
          key={index}
          onPress={() => {
            setView(item.name);
          }}
        >
          <Text>{item.displayName}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 1000,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "50px",
    // border: "1px solid black",
  },
  button: {
    flex: 1,
    // height: "30px",
    // width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    backgroundColor: "white",
  },
});
