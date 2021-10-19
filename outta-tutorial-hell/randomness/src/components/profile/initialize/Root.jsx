import React, { useCallback, useEffect } from "react"
import { Alert, ActivityIndicator } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import * as profileActions from "@app-store/actions/profile"
import { status as storeStatus } from "@app-store/data/profile"
import colors from "@app-constants/colors"

export default function Initialize({ children }) {
  const { message, status } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const tryPopulateStore = useCallback(() => {
    dispatch(profileActions.populateStore())
  }, [])

  useEffect(() => {
    tryPopulateStore()
  }, [])

  if (
    status === storeStatus.CICLE_START ||
    status === storeStatus.FETCH_DATABASE_INIT
  ) {
    return <ActivityIndicator size="large" color={colors.main.SECONDARY} />
  }

  if (status === storeStatus.FETCH_DATABASE_ERROR) {
    Alert.alert("Error", message, [
      { text: "Try Again", onPress: tryPopulateStore }
    ])

    return null
  }

  return children
}
