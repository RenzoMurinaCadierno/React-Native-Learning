import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ActivityIndicator, Alert } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Layout from "@app-components/layout"
import Root from "./Root"
import * as globalActions from "@app-store/actions/global"
import { status as _globalStoreStatus } from "@app-store/data/global"
import { status as _profileStoreStatus } from "@app-store/data/profile"
import colors from "@app-constants/colors"

export default function Initialize() {
  const globalStoreStatus = useSelector((state) => state.global.status)
  const globalStoreMessage = useSelector((state) => state.global.message)
  const profileStoreStatus = useSelector((state) => state.profile.status)
  const dispatch = useDispatch()

  const initializeDatabase = () => {
    dispatch(globalActions.initializeDatabase())
  }

  useEffect(initializeDatabase, [])

  if (_storesAreLoading(globalStoreStatus, profileStoreStatus)) {
    return (
      <Layout.Screen>
        <ActivityIndicator size="large" color={colors.main.SECONDARY} />
      </Layout.Screen>
    )
  }

  if (_databaseFetchFailed(globalStoreStatus)) {
    Alert.alert("Failed to retrieve from database", globalStoreMessage, [
      {
        text: "Retry",
        onPress: initializeDatabase
      }
    ])

    return <Layout.Screen />
  }

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}

function _storesAreLoading(
  currentGlobalStoreStatus,
  currentProfileStoreStatus
) {
  return (
    currentGlobalStoreStatus === _globalStoreStatus.CICLE_START ||
    currentGlobalStoreStatus === _globalStoreStatus.FETCH_DATABASE_INIT
    // currentProfileStoreStatus === _profileStoreStatus.CICLE_START
  )
}

function _databaseFetchFailed(globalStoreStatus) {
  return globalStoreStatus === _globalStoreStatus.FETCH_DATABASE_ERROR
}
