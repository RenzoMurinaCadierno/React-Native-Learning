import React from "react"
import { Button, Platform, SafeAreaView, StatusBar, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch } from "react-redux"
import ProductsOverviewScreen, {
  screenOptions as productsOverviewOptions
} from "../screens/shop/ProductsOverview"
import ProductDetailsScreen, {
  screenOptions as productDetailsOptions
} from "../screens/shop/ProductDetails"
import OrdersScreen, {
  screenOptions as ordersOptions
} from "../screens/shop/Orders"
import UserProductsScreen, {
  screenOptions as userProductsOptions
} from "../screens/user/UserProducts"
import EditProductScreen, {
  screenOptions as editProductOptions
} from "../screens/user/EditProduct"
import CartScreen, { screenOptions as cartOptions } from "../screens/shop/Cart"
import AuthScreen, { screenOptions as authOptions } from "../screens/user/Auth"
import colors from "../constants/colors"
import * as authActions from "../store/actions/auth"

const sharedDefaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },
  headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY
}

const ProductsStack = createStackNavigator()

export const ProductsNavigator = () => (
  <ProductsStack.Navigator screenOptions={sharedDefaultNavOptions}>
    <ProductsStack.Screen
      name="ProductsOverview"
      component={ProductsOverviewScreen}
      options={productsOverviewOptions}
    />
    <ProductsStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={productDetailsOptions}
    />
    <ProductsStack.Screen
      name="Cart"
      component={CartScreen}
      options={cartOptions}
    />
  </ProductsStack.Navigator>
)

const OrdersStack = createStackNavigator()

export const OrdersNavigator = () => (
  <OrdersStack.Navigator screenOptions={sharedDefaultNavOptions}>
    <OrdersStack.Screen
      name="OrdersScreen" // avoids name clash with Drawer below
      component={OrdersScreen}
      options={ordersOptions}
    />
  </OrdersStack.Navigator>
)

const AdminStack = createStackNavigator()

export const AdminNavigator = () => (
  <AdminStack.Navigator screenOptions={sharedDefaultNavOptions}>
    <AdminStack.Screen
      name="UserProducts"
      component={UserProductsScreen}
      options={userProductsOptions}
    />
    <AdminStack.Screen
      name="EditProduct"
      component={EditProductScreen}
      options={editProductOptions}
    />
  </AdminStack.Navigator>
)

const AuthStack = createStackNavigator()

export const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={sharedDefaultNavOptions}>
    <AuthStack.Screen
      name="Auth"
      component={AuthScreen}
      options={authOptions}
    />
  </AuthStack.Navigator>
)

const getDrawerContent = (props, dispatch) => (
  <View style={{ flex: 1 }}>
    <SafeAreaView
      forceInset={{ top: "always", horizontal: "never" }}
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      {/* was `DrawerItems` on React Navigation v4- */}
      <DrawerItemList {...props} />
      <Button
        title="logout"
        color={colors.PRIMARY}
        onPress={() => dispatch(authActions.logout())}
      />
    </SafeAreaView>
  </View>
)

const getDrawerOptions = (iconName) => ({
  drawerIcon: (props) => (
    <Ionicons
      name={Platform.OS === "android" ? `md-${iconName}` : `ios-${iconName}`}
      size={23}
      color={props.color} // now "color" instead of "tintColor"
    />
  )
})

const ShopDrawer = createDrawerNavigator()

export const ShopNavigator = () => {
  const dispatch = useDispatch()

  return (
    <ShopDrawer.Navigator
      // hide default header. We render one on each component
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => getDrawerContent(props, dispatch)}
    >
      <ShopDrawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={getDrawerOptions("cart")}
      />
      <ShopDrawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={getDrawerOptions("list")}
      />
      <ShopDrawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={getDrawerOptions("create")}
      />
    </ShopDrawer.Navigator>
  )
}

// **************** REACT NAVIGATION V4 ****************
// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetails: ProductDetailsScreen,
//     Cart: CartScreen
//   },
//   {
//     initialRouteName: "ProductsOverview",
//     navigationOptions: createSharedNavOptions("cart"),
//     defaultNavigationOptions: sharedDefaultNavOptions
//   }
// )
//////////////////////////
// const OrdersNavigator = createStackNavigator(
//   { Orders: OrdersScreen },
//   {
//     navigationOptions: createSharedNavOptions("list"),
//     defaultNavigationOptions: sharedDefaultNavOptions
//   }
// )

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen
//   },
//   {
//     navigationOptions: createSharedNavOptions("create"),
//     defaultNavigationOptions: sharedDefaultNavOptions
//   }
// )

// const AuthNavigator = createStackNavigator(
//   {
//     Auth: AuthScreen
//   },
//   { defaultNavigationOptions: sharedDefaultNavOptions }
// )

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
//   },
//   {
//     contentOptions: { activeTintColor: colors.PRIMARY },
//     contentComponent: (props) => {
//       const dispatch = useDispatch()

//       return (
//         <View style={{ flex: 1 }}>
//           <SafeAreaView
//             forceInset={{ top: "always", horizontal: "never" }}
//             style={{ paddingTop: StatusBar.currentHeight }}
//           >
//             {/* `DrawerNavigationItems` on latest React Navigation */}
//             <DrawerItems {...props} />
//             <Button
//               title="logout"
//               color={colors.PRIMARY}
//               onPress={() => {
//                 dispatch(authActions.logout())
//                 props.navigation.navigate("Auth")
//               }}
//             />
//           </SafeAreaView>
//         </View>
//       )
//     }
//   }
// )

// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator
// })

// export default createAppContainer(MainNavigator)
