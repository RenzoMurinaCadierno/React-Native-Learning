import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import { MEALS } from "../data/dummy"

export default function MealDetails(props) {
  const mealId = props.navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={_styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  )
}

MealDetails.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        {/* you can have multiple '*Item*' inside '*HeaderButton*' */}
        {/* `title` is used as key and for aria */}
        {/* `iconName` is the vector-icons target icon name */}
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
  }
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
