import React from "react"
import { View, StyleSheet, Button, Image } from "react-native"
import BoldText from "../components/BoldText"
import NormalText from "../components/NormalText"

export default function GameOverScreen({ guessRounds, userNum, onRestart }) {
  return (
    <View style={styles.container}>
      <BoldText>Game over!</BoldText>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/images/success.png")}
          source={{
            uri: "https://explorersweb.com/wp-content/uploads/2021/05/Summit-Everest-MingmaG.jpg"
          }}
          fadeDuration={500} // fade-in effect when img loads. 300 is default
          style={styles.image}
          resizeMode="cover" // and 'contain', 'center' 'repeat', 'stretch'
        />
      </View>
      <NormalText>PC Guesses: {guessRounds}</NormalText>
      <NormalText>Number: {userNum}</NormalText>
      <Button title="new game" onPress={onRestart} />
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
  image: { width: "100%", height: "100%" }
})
