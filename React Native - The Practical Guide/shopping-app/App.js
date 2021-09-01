import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import * as Font from "expo-font"
import * as Notifications from "expo-notifications"

import AppNavigator from "./navigation/AppNavigator"
import productsReducer from "./store/reducers/products"
import cartReducer from "./store/reducers/cart"
import ordersReducer from "./store/reducers/orders"
import authReducer from "./store/reducers/auth"

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowAlert: true })
})

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
})

// remember to remove `composeWithDevtools` before deploying!
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)

  useEffect(() => {
    // triggers when app is running and notif is recieved
    const foregroundSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("notification", notification)
      })

    // triggers when app is running and notif is clicked
    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response", response)
      })

    return () => {
      foregroundSubscription.remove()
      backgroundSubscription.remove()
    }
  }, [])

  useEffect(() => {
    fetchFonts()
      .then(() => setIsFontLoaded(true))
      .catch((err) => console.log(err))
  }, [])

  return isFontLoaded ? (
    <Provider store={store}>
      <AppNavigator />
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
