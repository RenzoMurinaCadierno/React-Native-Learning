import React from "react"
import { Text, View } from "react-native"

export default function App() {
  return (
    <View
      style={{
        padding: 70,
        flexDirection: "row",
        width: "80%",
        height: 200,
        justifyContent: "space-between",
        alignItems: "stretch"
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 2,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "red",
          flex: 3,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  )
}
