import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy"

export default function Favorites(props) {
  const dummyFavMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  )

  return <MealList data={dummyFavMeals} navigation={props.navigation} />
}

Favorites.navigationOptions = ({ navigation }) => ({
  headerTitle: "Your favorites",
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
