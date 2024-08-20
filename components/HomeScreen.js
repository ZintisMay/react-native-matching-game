import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  useState,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { TouchableHighlight, View } from "react-native-web";
import { useWindowDimensions } from "react-native";
import titleImage from "./assets/titleImage.png";

export default function HomeScreen() {
  console.log("image rendered", titleImage);
  return (
    <SafeAreaView style={css.container}>
      <View style={css.titleContainer}>
        <ImageBackground
          source={titleImage}
          style={css.image}
          resizeMode="contain"
        />
      </View>

      <View style={css.buttonContainer}>
        <Pressable
          style={css.largeButtons}
          onPress={() => alert("Button pressed!")}
        >
          <Text>Play</Text>
        </Pressable>
        <Pressable
          style={css.largeButtons}
          onPress={() => alert("Button pressed!")}
        >
          <Text>Settings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {},
  image: {
    width: "100vw",
    height: "300px",
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    height: "50vh",
  },
  buttonContainer: {
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  largeButtons: {
    height: "30vmin",
    width: "30vmin",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: "50%",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
