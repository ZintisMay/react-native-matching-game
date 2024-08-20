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
import { shuffle } from "./utils";
import { alert1, alert2, alert3 } from "./utils/alert";

const abc = "abcdefghijklmnopqrstuvwxyz".split("");
const randomABC = shuffle(abc);
const randomCells = shuffle([...randomABC, ...randomABC]);

export default function GameScreen(props) {
  const [isPlayable, setIsPlayable] = useState(true);
  const { boardSize = 6 } = props;
  const [board, setBoard] = useState([]);
  const [openIndexes, setOpenIndexes] = useState([]);
  const [lastThreeIndexes, setLastThreeIndexes] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const b = createRandomizedGameArray(abc, boardSize);
    setBoard(b);
  }, []);

  useEffect(() => {
    console.log("MatchedCards", matchedCards);
    console.log("board", board);
    if (board.length > 0 && matchedCards.length === board.length) {
      alert1("YOU WIN", "GOOD JOB");
      alert2("YOU WIN", "GOOD JOB");
      alert3("YOU WIN", "GOOD JOB");
      setIsPlayable(false);
    }
  }, [matchedCards, board]);

  return (
    <SafeAreaView style={styles.container}>
      <GameStatus />
      <View style={styles.gameArea}>
        {board.map((item, index) => (
          <GameCard key={index} index={index} item={item} />
        ))}
      </View>
    </SafeAreaView>
  );
  function GameCard({ index, item }) {
    const isRevealed =
      selectedCards.includes(index) || matchedCards.includes(index);
    return (
      <Pressable
        style={{
          ...styles.card,
          border: isRevealed ? "5px solid red" : "1px solid black",
        }}
        onPress={() => {
          selectCard(index);
        }}
      >
        {isRevealed && <Text>{item}</Text>}
      </Pressable>
    );
  }

  function GameStatus() {
    return <View style={styles.statusBar}></View>;
  }

  function selectCard(index) {
    console.log(
      "selectCard",
      index,
      board[index],
      isPlayable ? "playable" : "not playable"
    );
    if (!isPlayable) return;
    // dupe is clicked
    if (selectedCards.includes(index) || matchedCards.includes(index)) return;
    if (board[selectedCards[0]] === board[index]) {
      setMatchedCards([...matchedCards, index, selectedCards[0]]);
      setSelectedCards([]);
    } else if (board[selectedCards[1]] === board[index]) {
      setMatchedCards([...matchedCards, index, selectedCards[1]]);
      setSelectedCards([]);
    } else if (selectedCards.length < 2) {
      // first two guesses
      setSelectedCards([...selectedCards, index]);
    } else {
      // third guess removes first
      setSelectedCards([...selectedCards.slice(1), index]);
    }
  }
  function checkForVictory() {}
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "calc(100vh - 100px)",
    width: "100vw",
    height: "100%",
    backgroundColor: "gray",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    height: "50px",
    width: "50px",
  },
  hidden: {},
  revealed: {},
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
  let randomItems = shuffle(items);
  let itemSubset = items.slice(0, size / 2);
  let result = shuffle([...itemSubset, ...itemSubset]);
  console.log("createRandomizedGameArray", result);
  return result;
}
