import React from "react"
import { StatusBar } from "expo-status-bar"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import AppLoading from "expo-app-loading"
import {
  useFonts,
  Livvic_200ExtraLight,
  Livvic_200ExtraLight_Italic,
  Livvic_400Regular,
  Livvic_400Regular_Italic,
  Livvic_600SemiBold,
  Livvic_600SemiBold_Italic,
  Livvic_700Bold
} from "@expo-google-fonts/livvic"
// import { TabNavigator } from "./navigation/Main"
import { TabNavigator } from "@app-navigation/Main"
import { NavigationContainer } from "@react-navigation/native"
import profileReducer from "@app-store/reducers/profile"
import colors from "@app-constants/colors"

const store = createStore(combineReducers({ profile: profileReducer }))

export default function App() {
  const [areFontsLoaded] = useFonts({
    "livvic-light": Livvic_200ExtraLight,
    "livvic-regular": Livvic_400Regular,
    "livvic-regular-italic": Livvic_400Regular_Italic,
    "livvic-semi-bold": Livvic_600SemiBold,
    "livvic-bold": Livvic_700Bold
  })

  if (!areFontsLoaded) return <AppLoading />

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.background.CONTRAST} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}
