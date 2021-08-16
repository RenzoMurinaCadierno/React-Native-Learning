import React from "react"
import { FlatList, Platform } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import ProductItem from "../../components/shop/ProductItem"
import CustomHeaderButton from "../../UI/CustomHeaderButton"
import * as cartActions from "../../store/actions/cart"

export default function ProductsOverview(props) {
  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  )
  const dispatch = useDispatch()

  return (
    <FlatList
      data={availableProducts}
      keyExtractor={(item) => item.id} // not neccesary on newer versions!
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetails={() =>
            props.navigation.navigate("ProductDetails", {
              productId: item.id,
              productTitle: item.title
            })
          }
          onAddToCart={() => dispatch(cartActions.addToCart(item))}
        />
      )}
    />
  )
}

ProductsOverview.navigationOptions = ({ navigation }) => ({
  headerTitle: "All products",
  headerRight: () => (
    // need `npm i --save @react-navigation/native`!
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        onPress={() => navigation.navigate("Cart")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
})
