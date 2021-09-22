import React from "react"
import { StatusBar } from "expo-status-bar"
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
import { TabNavigator } from "@navigation/Main"
import { NavigationContainer } from "@react-navigation/native"
import colors from "@constants/colors"

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
    <>
      <StatusBar backgroundColor={colors.background.CONTRAST} />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  )
}
