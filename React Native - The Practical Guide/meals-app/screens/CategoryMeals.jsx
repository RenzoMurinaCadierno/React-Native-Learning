import React from "react"
import MealList from "../components/MealList"
import { CATEGORIES, MEALS } from "../data/dummy"

export default function CategoryMeals(props) {
  const categoryId = props.navigation.getParam("categoryId")

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) !== -1
  )

  return <MealList data={displayedMeals} navigation={props.navigation} />
}

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId)

  return { headerTitle: selectedCategory.title }
}
