import React from "react"
import { Button, Platform, SafeAreaView, StatusBar, View } from "react-native"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch } from "react-redux"
import ProductsOverviewScreen from "../screens/shop/ProductsOverview"
import ProductDetailsScreen from "../screens/shop/ProductDetails"
import OrdersScreen from "../screens/shop/Orders"
import UserProductsScreen from "../screens/user/UserProducts"
import EditProductScreen from "../screens/user/EditProduct"
import CartScreen from "../screens/shop/Cart"
import AuthScreen from "../screens/user/Auth"
import StartupScreen from "../screens/Startup"
import colors from "../constants/colors"
import * as authActions from "../store/actions/auth"

// this setup only overrides defaultNavigator options when the active
// screen is used as the top screen of another stack screen
const createSharedNavOptions = (iconName) => ({
  drawerIcon: (drawerConfigs) => (
    <Ionicons
      name={Platform.OS === "android" ? `md-${iconName}` : `ios-${iconName}`}
      size={23}
      color={drawerConfigs.tintColor}
    />
  )
})

const sharedDefaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },
  headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen
  },
  {
    initialRouteName: "ProductsOverview",
    navigationOptions: createSharedNavOptions("cart"),
    defaultNavigationOptions: sharedDefaultNavOptions
  }
)

const OrdersNavigator = createStackNavigator(
  { Orders: OrdersScreen },
  {
    navigationOptions: createSharedNavOptions("list"),
    defaultNavigationOptions: sharedDefaultNavOptions
  }
)

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
  },
  {
    navigationOptions: createSharedNavOptions("create"),
    defaultNavigationOptions: sharedDefaultNavOptions
  }
)

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  { defaultNavigationOptions: sharedDefaultNavOptions }
)

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
  },
  {
    contentOptions: { activeTintColor: colors.PRIMARY },
    contentComponent: (props) => {
      const dispatch = useDispatch()

      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView
            forceInset={{ top: "always", horizontal: "never" }}
            style={{ paddingTop: StatusBar.currentHeight }}
          >
            {/* `DrawerNavigationItems` on latest React Navigation */}
            <DrawerItems {...props} />
            <Button
              title="logout"
              color={colors.PRIMARY}
              onPress={() => {
                dispatch(authActions.logout())
                props.navigation.navigate("Auth")
              }}
            />
          </SafeAreaView>
        </View>
      )
    }
  }
)

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthNavigator,
  Shop: ShopNavigator
})

export default createAppContainer(MainNavigator)
