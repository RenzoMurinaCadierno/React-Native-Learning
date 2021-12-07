import React from "react"
import { StatusBar } from "expo-status-bar"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import AppLoading from "expo-app-loading"
import * as Font from "@expo-google-fonts/livvic"
import ErrorBoundary from "@app-screens/app-state/ErrorBoundary"
import AppNavigation from "@app-navigation"
import store from "@app-store"
import { colors } from "@app-constants"

const reduxStore = createStore(
  combineReducers(store.reducers),
  applyMiddleware(ReduxThunk)
)

export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar backgroundColor={colors.background.CONTRAST} />
      <Provider store={reduxStore}>
        <LoadAssetsBeforeChildren>
          <AppNavigation.Initialize mockDbIntervalLength={0} />
        </LoadAssetsBeforeChildren>
      </Provider>
    </ErrorBoundary>
  )
}

function LoadAssetsBeforeChildren({ children }) {
  const [areFontsLoaded] = Font.useFonts({
    "livvic-light": Font.Livvic_200ExtraLight,
    "livvic-regular": Font.Livvic_400Regular,
    "livvic-regular-italic": Font.Livvic_400Regular_Italic,
    "livvic-semi-bold": Font.Livvic_600SemiBold,
    "livvic-semi-bold-italic": Font.Livvic_600SemiBold_Italic
  })

  return areFontsLoaded ? children : <AppLoading />
}
