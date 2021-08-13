import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"

export default function Favorites(props) {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  return <MealList data={favoriteMeals} navigation={props.navigation} />
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
