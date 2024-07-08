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

import { useState } from "react";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";
import GamePlay from "./components/GamePlay";
import MenuScreen from "./components/MenuScreen";
import SelectScreen from "./components/SelectScreen";
import HomeScreen from "./components/HomeScreen";
import MenuBar from "./components/MenuBar";

const views = {
  Home: {
    displayName: "Home",
    name: "Home",
    component: HomeScreen,
  },
  Game: {
    displayName: "Select",
    name: "Game",
    component: SelectScreen,
  },
  GamePlay: {
    displayName: "Play",
    name: "GamePlay",
    component: GamePlay,
  },
  Menu: {
    displayName: "Menu",
    name: "Menu",
    component: MenuScreen,
  },
};

// 3x4, 4x5, 5x6, 6x7, 7x8, 8x9, 9x10
const boardSizes = [12, 20, 30, 42, 56, 72, 90];

const components = {
  MenuScreen,
  SelectScreen,
  HomeScreen,
};

export default function App() {
  const [view, setView] = useState("Home");
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

  const ViewToDisplay = views[view].component;

  return (
    <SafeAreaView style={styles.container}>
      <ViewToDisplay
        setView={setView}
        setImageSet={setImageSet}
        boardSize={boardSize}
        boardSizes={boardSizes}
        setBoardSize={setBoardSize}
      />
      <MenuBar menuItems={views} setView={setView} />
    </SafeAreaView>
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

{
  /* <SafeAreaView style={styles.container}>
      <View>App</View>
      <Menu />;
      {Dimensions.get("screen")}
      {buttonArray}
      <Text style={styles.text} numberOfLines={lines} onPress={incrementLines}>
        Sunt velit aliquip incididunt proident cupidatat proident exercitation
        velit. Officia culpa exercitation consequat quis eiusmod eu ex proident.
        Est cupidatat dolore non qui et culpa labore. Exercitation irure eiusmod
        laboris voluptate reprehenderit in sit laborum laborum. Duis voluptate
        ipsum enim laboris. Esse labore eu ex est. Minim ad mollit aute culpa
        culpa esse aliquip est in incididunt ipsum. Id ea in incididunt ad et
        consectetur laborum aliqua dolor qui minim ea. Sit duis proident esse ut
        duis laborum id exercitation nostrud duis proident Lorem sunt id. Magna
        magna irure qui aliqua. Ipsum eu nostrud ad quis ea. In enim mollit
      </Text>
      <TouchableOpacity>
        <Image source={require("./assets/icon.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableHighlight>
        <Image source={require("./assets/icon.png")} style={styles.icon} />
      </TouchableHighlight>
      <Image
        source={{
          uri: "http://picsum.photos/300/300",
          width: 300,
          height: 300,
        }}
      />
      <StatusBar style="auto" />
      <Button title="ALERT" onPress={() => Alert.alert("Hi", "How are you?")} />
      <Text>{Platform.OS}</Text>
    </SafeAreaView> */
}
