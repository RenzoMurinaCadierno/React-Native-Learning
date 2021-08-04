import React, { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import * as Font from "expo-font"

import Header from "./components/Header"
import GameScreen from "./screens/Game"
import GameOverScreen from "./screens/GameOver"
import StartGameScreen from "./screens/StartGame"
import colors from "./constants/colors"

export default function App() {
  const [userNum, setUserNum] = useState(0)
  const [guessRounds, setGuessRounds] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // useFont hook from "expo-font" is the default today!
  useEffect(() => {
    fetchFonts()
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true))
  }, [])

  if (!isLoaded) {
    return (
      <View style={{ ...styles.container, ...styles.loadingContainer }}>
        <ActivityIndicator size="large" color={colors.SECONDARY} />
      </View>
    )
  }

  const handleRestart = () => {
    setGuessRounds(0)
    setUserNum(0)
  }

  const handleStartGame = (selectedNum) => setUserNum(selectedNum)

  const handleGameOver = (numGuesses) => setGuessRounds(numGuesses)

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen {...{ userNum, guessRounds }} onRestart={handleRestart} />
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a #" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: { justifyContent: "center", alignItems: "center" }
})

function fetchFonts() {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}
