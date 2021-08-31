import React, { useEffect } from "react"
import * as Notifications from "expo-notifications"
import { Alert, Button, StyleSheet, View } from "react-native"

// this executes when the notification arrives, before displaying it
// > It MUST return a promise, so just return an async function
// > The return of that promise must be an object with configs
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true // display alert even on foreground
  })
})

export default function App() {
  useEffect(() => {
    // this does nothing on Android
    Notifications.getPermissionsAsync()
      .then((res) => {
        if (res.status !== "granted") {
          return Notifications.requestPermissionsAsync()
        }
        return res
      })
      .then((res) => {
        if (res.status !== "granted") {
          return Alert.alert("Notification permissions required", "", [
            { text: "ok" }
          ])
        }
      })
  }, [])

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

  const triggerNotification = () => {
    // create a local notifications. There are a bunch of props!
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Notif!",
        body: "Learning expo notifs",
        data: { extra: ["extra", "data"] }
      },
      trigger: { seconds: 2 }
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Show notification" onPress={triggerNotification} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
