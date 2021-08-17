import React from "react"
import { FlatList, Button } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import * as cartActions from "../../store/actions/cart"
import colors from "../../constants/colors"

export default function ProductsOverview(props) {
  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  )
  const dispatch = useDispatch()

  const handleSelectItem = (id, title) => {
    props.navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    })
  }

  return (
    <FlatList
      data={availableProducts}
      keyExtractor={(item) => item.id} // not neccesary on newer versions!
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => handleSelectItem(item.id, item.title)}
        >
          <Button
            color={colors.PRIMARY}
            title="View details"
            onPress={() => handleSelectItem(item.id, item.title)}
          />
          <Button
            color={colors.PRIMARY}
            title="To cart"
            onPress={() => dispatch(cartActions.addToCart(item))}
          />
        </ProductItem>
      )}
    />
  )
}

ProductsOverview.navigationOptions = ({ navigation }) => ({
  headerTitle: "All products",
  headerRight: () => (
    // need `npm i --save @react-navigation/native`!
    <CustomHeaderButtons
      title="Cart"
      iconName="cart"
      onPress={() => navigation.navigate("Cart")}
    />
  ),
  headerLeft: () => (
    <CustomHeaderButtons
      title="Menu"
      iconName="menu"
      onPress={navigation.toggleDrawer}
    />
  )
})
