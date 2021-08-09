import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import CategoriesScreen from "../screens/Categories"
import CategoryMealsScreen from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealDetails"

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
})

export default createAppContainer(MealsNavigator)
