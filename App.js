import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Touchable,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";

import { StateContextProvider } from "./components/State";
import Counter from "./components/Counter";

import { useState } from "react";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";
import GamePlay from "./components/GamePlay";
import Settings from "./components/Settings";
import SelectScreen from "./components/SelectScreen";
import HomeScreen from "./components/HomeScreen";
import MenuBar from "./components/MenuBar";
import GameImageSelect from "./components/GameImageSelect";
import GameSizeSelect from "./components/GameSizeSelect";

const views = {
  Settings,
  GameImageSelect,
  GameSizeSelect,
  GamePlay,
  HomeScreen,
};

// 3x4, 4x5, 5x6, 6x7, 7x8, 8x9, 9x10
const boardSizes = [
  { w: 3, h: 4 },
  { w: 4, h: 5 },
  { w: 5, h: 6 },
  { w: 6, h: 7 },
  { w: 7, h: 8 },
  { w: 8, h: 9 },
  { w: 9, h: 10 },
];

export default function App() {
  const [view, setView] = useState("HomeScreen");
  const [imageSet, setImageSet] = useState(null);
  const [boardSize, setBoardSize] = useState(boardSizes[0]);

  console.log(`Dimensions.get("screen")`, Dimensions.get("screen"));
  const { height, width, scale, fontScale } = useWindowDimensions();
  console.log(
    "height, width, scale, fontScale",
    height,
    width,
    scale,
    fontScale
  );

  const ViewToDisplay = views[view];

  return (
    <StateContextProvider>
      <SafeAreaView style={styles.container}>
        <Counter />
        <Counter />
        {/* <ViewToDisplay /> */}
        <MenuBar menuItems={views} setView={setView} />
      </SafeAreaView>
    </StateContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    height: "calc(100vh - 50px)",
  },
  text: {
    width: "90vw",
    margin: "auto",
  },
  icon: {
    width: iosAndroidWeb("50px", "60px", "50px"),
    height: iosAndroidWeb("50px", "60px", "50px"),
  },
});

function iosAndroidWeb(a, b, c) {
  switch (Platform.OS) {
    case "android":
      return a;
    case "IOS":
      return b;
    default:
      return c;
  }
}
