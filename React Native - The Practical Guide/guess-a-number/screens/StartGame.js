import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native"
import BoldText from "../components/BoldText"
import NormalText from "../components/NormalText"
import Card from "../components/Card"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"
import MainButton from "../components/MainButton"
import colors from "../constants/colors"

export default function StartGameScreen({ onStartGame }) {
  const [num, setNum] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [selectedNum, setSelectedNum] = useState()
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 3.5
  )

  useEffect(() => {
    // create a function that always returns the width of the window / 3.5
    const updateLayout = () =>
      setButtonWidth(Dimensions.get("window").width / 3.5)

    // add a listener to call for it
    Dimensions.addEventListener("change", updateLayout)

    // clear the event listener on unmount
    return () => Dimensions.removeEventListener("change", updateLayout)
  }, [])

  const handleChangeText = (text) => setNum(text.replace(/[^0-9]/g, ""))

  const handleResetInput = () => setNum("")

  const handleConfirm = () => {
    const chosenNum = parseInt(num)

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      return Alert.alert(
        "Invalid #",
        "It has to be between 1 and 99 inclusive",
        [{ text: "Back", style: "destructive", onPress: handleResetInput }]
      )
    }

    setConfirm(true)
    setNum("")
    setSelectedNum(chosenNum)
    Keyboard.dismiss()
  }

  let confirmedOutput

  if (confirm)
    confirmedOutput = (
      <Card style={styles.summaryCard}>
        <NormalText>Selected #:</NormalText>
        <NumberContainer>{selectedNum}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNum)}>Start</MainButton>
      </Card>
    )

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <BoldText style={styles.title}>New game</BoldText>
            <Card style={styles.card}>
              <NormalText>Choose a #</NormalText>
              <Input
                blurOnSubmit
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={2}
                value={num}
                onChangeText={handleChangeText}
                style={styles.input}
              />
              <View style={styles.buttonsContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={colors.DANGER}
                    onPress={handleResetInput}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={colors.PRIMARY}
                    onPress={handleConfirm}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
  title: { marginVertical: 10 },
  card: { width: "80%", minWidth: 300, maxWidth: "95%", alignItems: "center" },
  input: { width: 50, textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  summaryCard: { marginTop: 20, alignItems: "center" }
})
