/**
 * NO more `SwitchNavigator` in React Navigation v5+, so we need to
 * handle conditional routing. It was removed due to now all logic
 * being handled with React components, so we can determine when to
 * load each navigator with `if` statements.
 */
import React from "react"
import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import StartupScreen from "../screens/Startup"
import { ShopNavigator, AuthNavigator } from "./Shop"

export default function AppNavigator(props) {
  const isAuth = useSelector((state) => Boolean(state.auth.token))
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin)

  return (
    <NavigationContainer>
      {
        // render Shop screen if user is currently authenticated
        isAuth && <ShopNavigator />
      }
      {
        // render Auth screen if attempted auto-logged at app's startup
        // and user is not currently authenticated
        !isAuth && didTryAutoLogin && <AuthNavigator />
      }
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  )
}
