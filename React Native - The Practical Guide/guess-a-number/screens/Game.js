import React, { useState, useRef, useEffect } from "react"
import { View, Text, StyleSheet, Button, Alert } from "react-native"
import Card from "../components/Card"
import defaultStyles from "../constants/default-styles"

export default function GameScreen({ userChoice, onGameOver }) {
  const [curGuess, setCurGuess] = useState(rng(1, 100, userChoice))
  const [guesses, setGuesses] = useState(0)
  const curLow = useRef(1)
  const curHi = useRef(100)

  useEffect(() => {
    if (curGuess === userChoice) onGameOver(guesses)
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
    else curLow.current = curGuess

    const newGuess = rng(curLow.current, curHi.current, curGuess)

    setCurGuess(newGuess)
    setGuesses((prevGuesses) => prevGuesses + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={defaultStyles.BOLD_TEXT}>PC's guess</Text>
      <Text style={defaultStyles.NORMAL_TEXT}>{curGuess}</Text>
      <Card style={styles.buttonsContainer}>
        <Button title="lower" onPress={handleNextGuess.bind(this, "lower")} />
        <Button
          title="greater"
          onPress={handleNextGuess.bind(this, "greater")}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
})

function rng(min, max, exclude) {
  min = Math.ceil(min) // include 1
  max = Math.floor(max) // exclude 100
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) return rng(min, max, exclude)
  else return rndNum
}
