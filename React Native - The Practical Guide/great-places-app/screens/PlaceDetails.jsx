import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function PlaceDetails(props) {
  return (
    <View>
      <Text>PlaceDetails</Text>
    </View>
  )
}

PlaceDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("title")
})

const _styles = StyleSheet.create({
  container: {}
})
