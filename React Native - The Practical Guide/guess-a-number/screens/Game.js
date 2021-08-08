import React, { useState, useRef, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import * as ScreenOrientation from "expo-screen-orientation"
import Card from "../components/Card"
import MainButton from "../components/MainButton"
import NormalText from "../components/NormalText"
import defaultStyles from "../constants/default-styles"

export default function GameScreen({ userChoice, onGameOver }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  const [curGuess, setCurGuess] = useState(rng(1, 100, userChoice))
  const [guesses, setGuesses] = useState([{ guess: curGuess }])
  const [currDeviceWidth, setCurrDeviceWidth] = useState(
    Dimensions.get("window").width
  )
  const [currDeviceHeight, setCurrDeviceHeight] = useState(
    Dimensions.get("window").height
  )
  const curLow = useRef(1)
  const curHi = useRef(100)

  useEffect(() => {
    if (curGuess === userChoice) onGameOver(guesses.length)
  }, [curGuess, userChoice, onGameOver])

  useEffect(() => {
    const updateLayout = () => {
      setCurrDeviceHeight(Dimensions.get("window").height)
      setCurrDeviceWidth(Dimensions.get("window").width)
    }

    Dimensions.addEventListener("change", updateLayout)

    return () => Dimensions.removeEventListener("change", updateLayout)
  }, [])

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && curGuess < userChoice) ||
      (direction === "greater" && curGuess > userChoice)
    ) {
      return Alert.alert("No cheating", "You know that's not true.", [
        { text: "Sorry :c", style: "cancel" }
      ])
    }

    if (direction === "lower") curHi.current = curGuess
    else curLow.current = curGuess + 1 // as not to repeat keys

    const newGuess = rng(curLow.current, curHi.current, curGuess)

    setCurGuess(newGuess)
    setGuesses((prevGuesses) => [{ guess: newGuess }, ...prevGuesses])
  }

  if (currDeviceHeight < 500) {
    return (
      <View style={styles.container}>
        <Text style={defaultStyles.BOLD_TEXT}>PC's guess</Text>
        <Card style={styles.buttonsContainer}>
          <View style={styles.control}>
            <MainButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </MainButton>
            <Card>
              <Text style={defaultStyles.NORMAL_TEXT}>{curGuess}</Text>
            </Card>
            <MainButton onPress={handleNextGuess.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </MainButton>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.list}
            data={guesses}
            keyExtractor={({ guess }) => guess.toString()}
            renderItem={renderListItem}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={defaultStyles.BOLD_TEXT}>PC's guess</Text>
      <Card style={styles.guessWrapper}>
        <Text style={defaultStyles.NORMAL_TEXT}>{curGuess}</Text>
      </Card>
      <Card style={styles.buttonsContainer}>
        <MainButton onPress={handleNextGuess.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={handleNextGuess.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={guesses}
          keyExtractor={({ guess }) => guess.toString()}
          renderItem={(data) => renderListItem(guesses, data)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
  control: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%"
  },
  guessWrapper: {
    marginVertical: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    width: Dimensions.get("window").width > 500 ? "60%" : "80%",
    flex: 1 // stretch to the whole available space
  },
  list: {
    flexGrow: 1, // keeps styles of ScrollView. Exceeds boundaries. Shows first and last item no problems!
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  }
})

function rng(min, max, exclude) {
  min = Math.ceil(min) // include 1
  max = Math.floor(max) // exclude 100
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  return rndNum === exclude ? rng(min, max, exclude) : rndNum
}

function renderListItem(guesses, { item, index }) {
  return (
    <View style={styles.listItem}>
      <NormalText>#{guesses.length - index}</NormalText>
      <NormalText>{item.guess}</NormalText>
    </View>
  )
}
