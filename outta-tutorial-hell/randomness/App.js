import React from "react"
import { StatusBar } from "expo-status-bar"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import AppLoading from "expo-app-loading"
import {
  useFonts,
  Livvic_200ExtraLight,
  Livvic_400Regular,
  Livvic_400Regular_Italic,
  Livvic_600SemiBold,
  Livvic_600SemiBold_Italic
} from "@expo-google-fonts/livvic"
import ErrorBoundary from "@app-screens/ErrorBoundary"
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

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar backgroundColor={colors.background.CONTRAST} />
        <LoadAssetsBeforeChildren>
          <AppNavigation.Initialize />
        </LoadAssetsBeforeChildren>
      </Provider>
    </ErrorBoundary>
  )
}

function LoadAssetsBeforeChildren({ children }) {
  const [areFontsLoaded] = useFonts({
    "livvic-light": Livvic_200ExtraLight,
    "livvic-regular": Livvic_400Regular,
    "livvic-regular-italic": Livvic_400Regular_Italic,
    "livvic-semi-bold": Livvic_600SemiBold,
    "livvic-semi-bold-italic": Livvic_600SemiBold_Italic
  })

  return areFontsLoaded ? children : <AppLoading />
}
