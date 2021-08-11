import React from "react"
import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "../screens/Categories"
import CategoryMealsScreen from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealDetails"
import FavoritesScreen from "../screens/Favorites"
import { colors } from "../constants/colors"

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY,
  headerTitle: "Screen"
}

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
    defaultNavigationOptions: defaultStackNavigatorOptions,
    mode: "modal",
    initialRouteName: "Categories"
  }
)

const FavNavigation = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
)

const tabsScreenConfigs = {
  // you can use a whole navigator stack!
  Meals: {
    screen: MealsNavigator,
    // you can also set `navigatorOptions` in the component file, or
    // in `createStackNavigator` second argument
    navigationOptions: {
      // tabConfigs are configs set in `tabBarOptions`
      tabBarIcon: (tabConfigs) => (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color={tabConfigs.tintColor}
        />
      ),
      tabBarColor: colors.PRIMARY
    }
  },
  // and single screens, also shorthanded `Favorites: FavoritesScreen | FavNavigation`
  Favorites: {
    screen: FavNavigation,
    navigationOptions: {
      tabBarLabel: "Favs",
      tabBarIcon: (tabConfigs) => (
        <Ionicons name="ios-star" size={25} color={tabConfigs.tintColor} />
      ),
      tabBarColor: colors.SECONDARY
    }
  }
}

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsScreenConfigs, {
        activeColor: "white",
        // enables bgcolor shift using `tabBarColor` when toggling tabs,
        // with a rippling effect
        shifting: true
        // or use this if `shifting: false` (no ripple color change)
        // barStyle: { backgroundColor: colors.PRIMARY}
      })
    : createBottomTabNavigator(tabsScreenConfigs, {
        tabBarOptions: { activeTintColor: colors.SECONDARY }
      })

// createAppContainer fuses both navigators into a root one
export default createAppContainer(MealsFavTabNavigator)
