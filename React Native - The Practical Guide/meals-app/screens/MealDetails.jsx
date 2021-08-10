import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function MealDetails(props) {
  return (
    <View style={_styles.container}>
      <Text>MealDetails</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
      <Button title="To root" onPress={() => props.navigation.popToTop()} />
      <Button
        title="Replace with Categories"
        onPress={() => props.navigation.replace("Categories")}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
