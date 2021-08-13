import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import { enableScreens } from "react-native-screens"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import MealsNavigator from "./navigation/MealsNavigator"
import mealsReducer from "./store/reducers/meals"

enableScreens()

const rootReducer = combineReducers({ meals: mealsReducer })

const store = createStore(rootReducer)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    fetchFonts()
      .then(() => setFontLoaded(true))
      .catch(console.error)
  }, [])

  return !fontLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
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
