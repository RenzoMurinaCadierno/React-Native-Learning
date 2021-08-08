import React from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView
} from "react-native"
import BoldText from "../components/BoldText"
import NormalText from "../components/NormalText"
import MainButton from "../components/MainButton"
import colors from "../constants/colors"

export default function GameOverScreen({ guessRounds, userNum, onRestart }) {
  return (
    <ScrollView>
      {/* if device is extra small, make sure it is scrollable */}
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
          PC Guesses: <Text style={styles.highlight}>{guessRounds}</Text>. #
          was: <Text style={styles.highlight}>{userNum}</Text>
        </NormalText>
        <MainButton onPress={onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20 // 5%
  },
  image: { width: "100%", height: "100%" },
  textWrapper: {
    marginVertical: Dimensions.get("window").height / 40, // 2.5%
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  highlight: {
    color: colors.PRIMARY,
    fontFamily: "open-sans-bold",
    marginHorizontal: 30
  }
})
