import React from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { StatusBar } from "react-native"
import PlacesNavigator from "./navigation/Places"
import placesReducer from "./store/reducer/places"
import { initializeDatabase } from "./storage/db"

initializeDatabase()
// .then(() => console.log("SQLite initialized."))
// .catch((err) => console.log("SQLite initialization failed.", err))

const rootReducer = combineReducers({ places: placesReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
      <StatusBar barStyle="default" />
    </Provider>
  )
}
