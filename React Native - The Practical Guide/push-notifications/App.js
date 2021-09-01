import React, { useEffect, useState } from "react"
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
  const [pushToken, setPushToken] = useState(null)

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
          Alert.alert("Notification permissions required", "", [{ text: "ok" }])
          // res.status can be "undetermined", which will still fall
          // to the next `then` block. We do not want that.
          throw new Error("Notification permissions required")
        }
      })
      .then(() => {
        // only scenario in this block is "res.status === 'granted'"
        return Notifications.getExpoPushTokenAsync()
      })
      .then((res) => {
        setPushToken(res.data) // `res.data` being the expo token
        // > store the token in your own managed database.
        // fetch('https://your-server-to-store-token.com',
        // { method: "POST", ..., data: { token: res.data })
      })
      .catch((err) => console.log(err))
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
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "Notif!",
    //     body: "Learning expo notifs",
    //     data: { extra: ["extra", "data"] }
    //   },
    //   trigger: { seconds: 1 }
    // })

    // create a push notification.
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Host: "exp.host",
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: pushToken,
        data: { extra: "some extra data" },
        title: "Sent by the app",
        body: "This push notification was sent by the app!"
      })
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
