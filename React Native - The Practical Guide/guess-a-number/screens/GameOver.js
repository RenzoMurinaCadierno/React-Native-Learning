import React from "react"
import { View, StyleSheet, Button, Image, Text } from "react-native"
import BoldText from "../components/BoldText"
import NormalText from "../components/NormalText"
import MainButton from "../components/MainButton"
import colors from "../constants/colors"

export default function GameOverScreen({ guessRounds, userNum, onRestart }) {
  return (
    <View style={styles.container}>
      <BoldText>Game over!</BoldText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          // source={{
          //   uri: "https://explorersweb.com/wp-content/uploads/2021/05/Summit-Everest-MingmaG.jpg"
          // }}
          // fadeDuration={500} // fade-in effect when img loads. 300 is default
          style={styles.image}
          resizeMode="cover" // and 'contain', 'center' 'repeat', 'stretch'
        />
      </View>
      <NormalText style={styles.textWrapper}>
        PC Guesses: <Text style={styles.highlight}>{guessRounds}</Text>. # was:{" "}
        <Text style={styles.highlight}>{userNum}</Text>
      </NormalText>
      <MainButton onPress={onRestart}>New Game</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageContainer: {
    width: 300, // hard coded for now. Will media query later!
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  // RN is able to calculate width/height of local images, but NOT from
  // remote ones! These last ones ALWAYS need height and width!
  image: { width: "100%", height: "100%" },
  textWrapper: {
    marginVertical: 20,
    textAlign: "center"
  },
  highlight: {
    color: colors.PRIMARY,
    fontFamily: "open-sans-bold",
    marginHorizontal: 30
  }
})
