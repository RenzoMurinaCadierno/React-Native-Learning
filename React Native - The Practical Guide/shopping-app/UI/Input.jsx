import React, { useEffect, useReducer } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"

const INPUT_CHANGE = "INPUT_CHANGE"
const INPUT_BLUR = "INPUT_BLUR"

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, value: action.value, isValid: action.isValid }

    case INPUT_BLUR:
      return { ...state, touched: true }

    default:
      return state
  }
}

export default function Input({
  id,
  initialValue,
  initialIsValid,
  label,
  value,
  onChangeText,
  validationMsg,
  required,
  email,
  min,
  max,
  minLength,
  ...textInputProps
}) {
  const [state, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isValid: initialIsValid,
    touched: false
  })

  useEffect(() => {
    if (state.touched) onChangeText(id, state.value, state.isValid)
  }, [state, id, onChangeText])

  const handleOnChangeText = (text) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let isValid = true

    if (required && text.trim().length === 0) isValid = false
    if (email && !emailRegex.test(text.toLowerCase())) isValid = false
    if (Number.isInteger(min) && +text < min) isValid = false
    if (Number.isInteger(max) && +text > max) isValid = false
    if (Number.isInteger(minLength) && text.length < minLength) isValid = false

    dispatch({ type: INPUT_CHANGE, value: text, isValid })
  }

  const handleOnBlur = () => dispatch({ type: INPUT_BLUR })

  return (
    <View style={_styles.formControl}>
      <Text style={_styles.label}>{label}</Text>
      <TextInput
        style={_styles.input}
        value={state.value}
        onChangeText={handleOnChangeText}
        onBlur={handleOnBlur}
        {...textInputProps}
      />
      {!state.isValid && <Text>{validationMsg || "Invalid input"}</Text>}
    </View>
  )
}

const _styles = StyleSheet.create({
  formControl: { width: "100%" },
  label: { fontFamily: "open-sans-bold", marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
})
