import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import ProductsOverviewScreen from "../screens/shop/ProductsOverview"
import ProductDetailsScreen from "../screens/shop/ProductDetails"
import colors from "../constants/colors"

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen
  },
  {
    initialRouteName: "ProductsOverview",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
      },
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: { fontFamily: "open-sans" },
      headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY
    }
  }
)

export default createAppContainer(ProductsNavigator)
