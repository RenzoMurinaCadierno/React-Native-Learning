import React, { useState } from "react"
import { View, Button, TextInput, StyleSheet, Modal } from "react-native"

export default function TextField({
  modalProps = {},
  inputProps = {},
  addButtonProps = {},
  cancelButtonProps = {}
}) {
  const [text, setText] = useState("")

  function handleChangeText(text) {
    setText(text)
  }

  function addNewText() {
    addButtonProps?.onPress?.(text)
    setText("")
  }

  return (
    <Modal animationType="slide" {...modalProps}>
      <View style={styles.container}>
        <TextInput
          placeholder={inputProps?.placeholder || "Example placeholder"}
          value={text}
          onChangeText={handleChangeText}
          style={styles.input}
          {...inputProps}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="cancel"
              color="red"
              onPress={cancelButtonProps?.onPress}
            />
          </View>
          <View style={styles.button}>
            <Button {...addButtonProps} onPress={addNewText} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // <- as much space as parent gives it
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "75%",
    marginBottom: 10
  },
  buttonsContainer: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    width: "40%" // <- buttons need View to apply styles!
  }
})
