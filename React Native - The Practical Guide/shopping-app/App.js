import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import ShopNavigator from "./navigation/Shop"
import productsReducer from "./store/reducers/products"
import cartReducer from "./store/reducers/cart"
import * as Font from "expo-font"

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

// remember to remove `composeWithDevtools` before deploying!
const store = createStore(rootReducer, composeWithDevTools())

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)

  useEffect(() => {
    fetchFonts()
      .then(() => setIsFontLoaded(true))
      .catch((err) => console.log(err))
  }, [])

  return isFontLoaded ? (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  ) : (
    <View style={_styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
})

function fetchFonts() {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}
