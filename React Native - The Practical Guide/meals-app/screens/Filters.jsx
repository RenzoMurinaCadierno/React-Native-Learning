import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"

export default function Filters(props) {
  return (
    <View style={_styles.container}>
      <Text>Filters</Text>
    </View>
  )
}

Filters.navigationOptions = ({ navigation }) => ({
  headerTitle: "Filter meals",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
})

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
