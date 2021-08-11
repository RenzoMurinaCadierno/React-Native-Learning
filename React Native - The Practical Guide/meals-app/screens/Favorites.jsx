import React from "react"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy"

export default function Favorites(props) {
  const dummyFavMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  )
  return <MealList data={dummyFavMeals} navigation={props.navigation} />
}

Favorites.navigationOptions = { headerTitle: "Your favorites" }
