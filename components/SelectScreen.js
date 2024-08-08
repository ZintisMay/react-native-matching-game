import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  useState,
  Text,
  View,
  Pressable,
} from "react-native";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";

export default function SelectScreen(props) {
  let { boardSize, boardSizes } = props;
  let cellCount = boardSize.w * boardSize.h; // width * height

  let [imageSet, setImageSet] = useState(null);
  console.log("GameScreen", boardSizes);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Select Size</Text>
      <View style={styles.selectArea}>
        {boardSizes.map((size, index) => {
          return (
            <Pressable
              style={styles.boardSizeButton}
              key={index}
              onPress={() => {
                setBoardSize(size);
              }}
            >
              {size}
            </Pressable>
          );
        })}
      </View>
      <Text>Select Image Set</Text>
      <View style={styles.selectArea}>
        {boardSizes.map((size, index) => {
          return (
            <Pressable
              style={styles.boardSizeButton}
              key={index}
              onPress={() => {
                setBoardSize(size);
              }}
            >
              {size}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { width: "calc(90% + 30px)" },
  boardSizeButton: {
    height: "20vmin",
    width: "20vmin",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectArea: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    padding: 10,
  },
});
