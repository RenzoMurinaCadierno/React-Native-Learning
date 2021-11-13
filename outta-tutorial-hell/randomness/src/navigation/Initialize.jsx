import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ActivityIndicator, Alert } from "react-native"
import Layout from "@app-components/layout"
import RootNavigation from "./Root"
import * as globalActions from "@app-store/actions/global"
import { status as globalStoreStatus } from "@app-store/states/global"
import colors from "@app-constants/colors"

export default function Initialize() {
  const globalStoreStatus = useSelector((state) => state.global.status)
  const globalStoreMessage = useSelector((state) => state.global.message)
  const dispatch = useDispatch()

  useEffect(() => {
    const initializeDatabase = async () => {
      await dispatch(globalActions.initializeDatabase())
    }

    initializeDatabase()
  }, [])

  if (_storeIsLoading(globalStoreStatus)) {
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

  return <RootNavigation />
}

function _storeIsLoading(currentGlobalStoreStatus) {
  return (
    currentGlobalStoreStatus === globalStoreStatus.CICLE_START ||
    currentGlobalStoreStatus === globalStoreStatus.FETCH_DATABASE_INIT
  )
}

function _databaseFetchFailed(globalStoreStatus) {
  return globalStoreStatus === globalStoreStatus.FETCH_DATABASE_ERROR
}
