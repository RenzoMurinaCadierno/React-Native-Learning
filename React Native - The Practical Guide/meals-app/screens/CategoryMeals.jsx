import React from "react"
import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import DefaultText from "../components/DefaultText"
import MealList from "../components/MealList"
import { CATEGORIES } from "../data/dummy"

export default function CategoryMeals(props) {
  const categoryId = props.navigation.getParam("categoryId")

  const availableMeals = useSelector((state) => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) !== -1
  )

  return !displayedMeals.length ? (
    <View style={_styles.container}>
      <DefaultText>Nothing to show. Checked filters?</DefaultText>
    </View>
  ) : (
    <MealList data={displayedMeals} navigation={props.navigation} />
  )
}

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId)

  return { headerTitle: selectedCategory.title }
}

const _styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
})
