import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Alert } from "react-native"
import Screens from "@app-screens"
import Layout from "@app-components/layout"
import RootNavigation from "./Root"
import * as globalActions from "@app-store/actions/global"
import { status as globalStoreStatus } from "@app-store/states/global"

export default function Initialize({ mockDbIntervalLength }) {
  const globalStoreStatus = useSelector((state) => state.global.status)
  const globalStoreMessage = useSelector((state) => state.global.message)
  const dispatch = useDispatch()

  const initializeDatabase = async (mockDbIntervalLength) => {
    await dispatch(globalActions.initializeDatabase(mockDbIntervalLength))
  }

  useEffect(() => {
    initializeDatabase(mockDbIntervalLength)
  }, [])

  if (_storeIsLoading(globalStoreStatus)) {
    return <Screens.Loading textChangeIntervalLength={mockDbIntervalLength} />
  }

  if (_databaseFetchFailed(globalStoreStatus)) {
    Alert.alert(
      "Failed to retrieve from database",
      globalStoreMessage.replace("[GLOBAL] ", ""),
      [{ text: "Retry", onPress: initializeDatabase }]
    )

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

function _databaseFetchFailed(currentGlobalStoreStatus) {
  return currentGlobalStoreStatus === globalStoreStatus.FETCH_DATABASE_ERROR
}
