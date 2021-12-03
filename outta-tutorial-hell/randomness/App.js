import React from "react"
import { StatusBar } from "expo-status-bar"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import AppLoading from "expo-app-loading"
import * as Font from "@expo-google-fonts/livvic"
import ErrorBoundary from "@app-screens/app-state/ErrorBoundary"
import AppNavigation from "@app-navigation"
import globalReducer from "@app-store/reducers/global"
import profileReducer from "@app-store/reducers/profile"
import projectsReducer from "@app-store/reducers/projects"
import contactReducer from "@app-store/reducers/contact"
import colors from "@app-constants/colors"

const rootReducer = combineReducers({
  global: globalReducer,
  profile: profileReducer,
  projects: projectsReducer,
  contact: contactReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
check text interval delay bug
export default function App() {
  return (
    <ErrorBoundary>
      <StatusBar backgroundColor={colors.background.CONTRAST} />
      <Provider store={store}>
        <LoadAssetsBeforeChildren>
          <AppNavigation.Initialize mockDbIntervalLength={4500} />
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
