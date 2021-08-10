import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import { enableScreens } from "react-native-screens"
import MealsNavigator from "./navigation/MealsNavigator"

enableScreens()

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    fetchFonts()
      .then(() => setFontLoaded(true))
      .catch(console.error)
  }, [])

  return !fontLoaded ? <AppLoading /> : <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

async function fetchFonts() {
  return await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}
