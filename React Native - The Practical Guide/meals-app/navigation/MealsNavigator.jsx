import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import CategoriesScreen from "../screens/Categories"
import CategoryMealsScreen from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealDetails"
import { colors } from "../constants/colors"

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Meal Categories" }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
  },
  {
    // second arg of "createStackNavigator" are defaults for every screen
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY
    },
    mode: "modal",
    initialRouteName: "Categories"
  }
)

export default createAppContainer(MealsNavigator)
