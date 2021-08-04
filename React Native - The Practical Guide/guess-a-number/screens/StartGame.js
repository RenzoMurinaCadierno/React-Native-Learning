import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native"
import BoldText from "../components/BoldText"
import NormalText from "../components/NormalText"
import Card from "../components/Card"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"
import colors from "../constants/colors"

export default function StartGameScreen({ onStartGame }) {
  const [num, setNum] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [selectedNum, setSelectedNum] = useState()

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
        <Button
          title="Start"
          color={colors.PRIMARY}
          onPress={() => onStartGame(selectedNum)}
        />
      </Card>
    )

  return (
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
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.DANGER}
                onPress={handleResetInput}
              />
            </View>
            <View style={styles.button}>
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
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: "center" },
  title: { marginVertical: 10 },
  card: { width: 300, maxWidth: "80%", alignItems: "center" },
  input: { width: 50, textAlign: "center" },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: { width: "40%" },
  summaryCard: { marginTop: 20, alignItems: "center" }
})
