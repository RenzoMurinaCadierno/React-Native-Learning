import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function CategoryMeals(props) {
  return (
    <View style={_styles.container}>
      <Text>CategoryMeals</Text>
      <Button
        title="Back to categories"
        onPress={() => props.navigation.navigate("Categories")}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
