import React from "react"
import { Platform, SafeAreaView, StatusBar, Text } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "../screens/Categories"
import CategoryMealsScreen from "../screens/CategoryMeals"
import MealDetailsScreen from "../screens/MealDetails"
import FavoritesScreen from "../screens/Favorites"
import FiltersScreen from "../screens/Filters"
import { colors } from "../constants/colors"

const defaultStackNavigatorOptions = {
  // targets container <View>
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
  },
  // targets title <Text>
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  // targets 'back' <Button> text in iOS
  headerBackTitleStyle: {
    fontFamily: "open-sans"
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

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions is when it is actively used as a screen
    // > navigationOptions: { drawerLabel: 'Filters'},
    // defaultNavigation applies passively to all screens
    defaultNavigationOptions: defaultStackNavigatorOptions
  }
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
      tabBarColor: colors.PRIMARY,
      // targets label <Text> on each tab in android
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Meals </Text>
        ) : (
          "Meals"
        )
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
      tabBarColor: colors.SECONDARY,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}> Meals </Text>
        ) : (
          "Meals"
        )
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
        tabBarOptions: {
          // targets label <Text> on each tab in iOS
          labelStyle: "open-sans",
          activeTintColor: colors.SECONDARY
        }
      })

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" }
    },
    Filters: FiltersNavigator
  },
  {
    // drawer items
    contentOptions: {
      activeTintColor: colors.SECONDARY,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    },
    contentComponent: (props) => (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    )
  }
)

// createAppContainer fuses both navigators into a root one
export default createAppContainer(MainNavigator)
