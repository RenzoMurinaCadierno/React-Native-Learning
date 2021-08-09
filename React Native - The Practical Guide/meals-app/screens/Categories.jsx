import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

export default function Categories(props) {
  return (
    <View style={_styles.container}>
      <Text>Categories</Text>
      <Button
        title="Go to meals"
        onPress={() =>
          props.navigation.navigate({ routeName: "CategoryMeals" })
        }
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
