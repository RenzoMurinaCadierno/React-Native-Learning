import React, { useState, useRef, useEffect } from "react"
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Card from "../components/Card"
import MainButton from "../components/MainButton"
import NormalText from "../components/NormalText"
import defaultStyles from "../constants/default-styles"

export default function GameScreen({ userChoice, onGameOver }) {
  const [curGuess, setCurGuess] = useState(rng(1, 100, userChoice))
  const [guesses, setGuesses] = useState([curGuess])
  const curLow = useRef(1)
  const curHi = useRef(100)

  useEffect(() => {
    if (curGuess === userChoice) onGameOver(guesses.length)
  }, [curGuess, userChoice, onGameOver])

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
    setGuesses((prevGuesses) => [newGuess, ...prevGuesses])
  }

  const renderListItem = (value, index) => (
    <View key={value} style={styles.listItem}>
      <NormalText>#{guesses.length - index}</NormalText>
      <NormalText>{value}</NormalText>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={defaultStyles.BOLD_TEXT}>PC's guess</Text>
      <Text style={defaultStyles.NORMAL_TEXT}>{curGuess}</Text>
      <Card style={styles.buttonsContainer}>
        <MainButton onPress={handleNextGuess.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={handleNextGuess.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {guesses.map(renderListItem)}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    width: "80%",
    flex: 1 // stretch to the whole available space
  },
  list: {
    flexGrow: 1, // keeps styles of ScrollView. Exceeds boundaries. Shows first and last item no problems!
    alignItems: "center",
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
    width: "60%"
  }
})

function rng(min, max, exclude) {
  min = Math.ceil(min) // include 1
  max = Math.floor(max) // exclude 100
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  return rndNum === exclude ? rng(min, max, exclude) : rndNum
}
