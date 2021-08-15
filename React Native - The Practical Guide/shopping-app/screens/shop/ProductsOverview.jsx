import React from "react"
import { FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
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

ProductsOverview.navigationOptions = {
  headerTitle: "All products"
}
