/**
 * Screen to show at load, while checking if user is logged in using
 * AsyncStorage.
 */
import React, { useEffect } from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from "react-redux"
import colors from "../constants/colors"
import * as sharedStyles from "../constants/styles"
import * as authActions from "../store/actions/auth"

export default function Startup(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    const tryAuth = async () => {
      const userData = await AsyncStorage.getItem("userData")

      if (!userData) return props.navigation.navigate("Auth")

      const { token, userId, expirationDate } = JSON.parse(userData)
      // expiration date is an ISO string, we need a date object
      const expiration = new Date(expirationDate)

      // invalid auth if session expired, on no token or no registered user
      if (expiration <= new Date() || !token || !userId) {
        return props.navigation.navigate("Auth")
      }

      const expirationTime = expiration.getTime() - new Date().getTime()

      props.navigation.navigate("Shop")
      dispatch(authActions.authenticate(userId, token, expirationTime))
    }

    tryAuth()
  }, [])

  return (
    <View style={_styles.container}>
      <ActivityIndicator size="large" color={colors.PRIMARY} />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: sharedStyles.STRETCH_AND_CENTER
})
