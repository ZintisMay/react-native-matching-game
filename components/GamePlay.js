import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  useContext,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { TouchableHighlight } from "react-native-web";
import { useWindowDimensions } from "react-native";
import { shuffle, determineDimensions } from "./utils";

const abc = "abcdefghijklmnopqrstuvwxyz".split("");
const randomABC = shuffle(abc);
const randomCells = shuffle([...randomABC, ...randomABC]);

export default function GameScreen(props) {
  const { boardSize } = props;
  const [board, setBoard] = useState(createRandomizedGameArray(abc, boardSize));
  const [openIndexes, setOpenIndexes] = useState([]);
  const [lastThreeIndexes, setLastThreeIndexes] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [selectedList, setSelectedList] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <GameStatus />
      <View style={styles.gameArea}>
        {board.map((item, index) => (
          <GameCard key={index} index={index} />
        ))}
      </View>
    </SafeAreaView>
  );
  function GameCard({ index }) {
    return (
      <Pressable
        style={{
          ...styles.card,
          width: `calc(${cellWidthPercentage}% - 10px)`,
          height: `calc(${cellHeightPercentage}% - 5px)`,
        }}
        onPress={() => {
          selectCard(index);
        }}
      >
        <Text>{randomCells[index]}</Text>
      </Pressable>
    );
  }

  function GameStatus() {
    return <View style={styles.statusBar}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "calc(100vh - 100px)",
    width: "100vw",
    height: "100%",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    maxHeight: "calc(100% / 6)",
  },
  gameArea: {
    height: "calc(100% - 100px)",
    width: "calc(100%)",
    margin: "auto",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  statusBar: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function createRandomizedGameArray(items, size) {
  let itemSubset = items.slice(0, size / 2);
  let result = shuffle([...itemSubset, ...itemSubset]);
  // console.log("createRandomizedGameArray", result);
  return result;
}
