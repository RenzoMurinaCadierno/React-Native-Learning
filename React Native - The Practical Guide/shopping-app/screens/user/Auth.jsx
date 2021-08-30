import React, { useState, useCallback, useReducer, useEffect } from "react"
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Button,
  ActivityIndicator,
  Alert
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useDispatch } from "react-redux"
import Card from "../../UI/Card"
import Input from "../../UI/Input"
import * as authActions from "../../store/actions/auth"
import colors from "../../constants/colors"
import * as sharedStyles from "../../constants/styles"

const UPDATE_FORM_INPUT = "UPDATE_FORM_INPUT"

const formReducer = (state, action) => {
  if (action.type === UPDATE_FORM_INPUT) {
    const updatedValues = {
      ...state.values,
      [action.input]: action.value
    }
    const updatedValidations = {
      ...state.validations,
      [action.input]: action.isInputValid
    }
    let isFormValid = true

    for (const key in updatedValidations) {
      isFormValid = isFormValid && updatedValidations[key]
    }

    return {
      values: updatedValues,
      validations: updatedValidations,
      isFormValid
    }
  }

  return state
}

export default function Auth(props) {
  const [isSignup, setIsSignup] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  const [formState, formDispatch] = useReducer(formReducer, {
    values: { email: "asd@asd.com", password: "asdfgh" },
    validations: { email: false, password: false },
    isFormValid: false
  })

  useEffect(() => {
    if (error) Alert.alert("Error while auth", error, [{ text: "OK" }])
  }, [error])

  const handleOnChangeText = useCallback(
    (input, value, isInputValid) => {
      formDispatch({
        type: UPDATE_FORM_INPUT,
        value,
        isInputValid,
        input
      })
    },
    [formDispatch]
  )

  const handleAuth = async () => {
    setIsLoading(true)
    setError("")
    const { email, password } = formState.values

    try {
      await dispatch(
        authActions[isSignup ? "signup" : "login"](email, password)
      )
      // props.navigation.navigate("Shop")
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView style={_styles.container} behavior="height">
      <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={_styles.gradient}>
        <Card style={_styles.card}>
          <ScrollView>
            <Input
              id="email"
              label="E-mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              validationMsg="Enter a valid email address"
              value={formState.values.email}
              onChangeText={handleOnChangeText}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry // hides characters, like ****
              required
              minLength={6}
              autoCapitalize="none"
              validationMsg="Enter a valid password"
              value={formState.values.password}
              onChangeText={handleOnChangeText}
              initialValue=""
            />
            <View style={_styles.buttonsContainer}>
              <View style={_styles.button}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={colors.PRIMARY} />
                ) : (
                  <Button
                    title={isSignup ? "Go signin" : "Go signup"}
                    color={colors.SECONDARY}
                    onPress={() => setIsSignup((st) => !st)}
                  />
                )}
              </View>
              <View style={_styles.button}>
                <Button
                  title={isSignup ? "Register" : "Login"}
                  color={colors.PRIMARY}
                  onPress={handleAuth}
                />
              </View>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export const screenOptions = { headerTitle: "Authentication" }

const _styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: sharedStyles.STRETCH_AND_CENTER,
  card: { width: "80%", maxWidth: 400, maxHeight: 400, padding: 20 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  button: { width: "40%" }
})
