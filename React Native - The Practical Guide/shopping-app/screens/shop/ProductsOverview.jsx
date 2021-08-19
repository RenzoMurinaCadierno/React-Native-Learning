import React, { useEffect, useState, useCallback } from "react"
import {
  FlatList,
  Button,
  ActivityIndicator,
  View,
  StyleSheet,
  Text
} from "react-native"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import * as cartActions from "../../store/actions/cart"
import * as productsActions from "../../store/actions/products"
import * as sharedStyles from "../../constants/styles"
import colors from "../../constants/colors"

export default function ProductsOverview(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  )
  const dispatch = useDispatch()

  const loadProducts = useCallback(async () => {
    setIsLoading(true)
    setErrorMsg("")

    try {
      await dispatch(productsActions.fetchProducts())
    } catch (err) {
      // error object comes from Firebase. It has "message" key
      setErrorMsg(err.message)
    }

    setIsLoading(false)
  }, [setIsLoading, dispatch, setErrorMsg])

  useEffect(() => {
    loadProducts() // cannot pass a pointer. It's an async function
  }, [dispatch, loadProducts])

  const handleSelectItem = (id, title) => {
    props.navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    })
  }

  if (errorMsg) {
    return (
      <View style={_styles.loadingContainer}>
        <Text>Error while fetching data</Text>
        <Button title="Refetch" onPress={loadProducts} color={colors.PRIMARY} />
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={_styles.loadingContainer}>
        <ActivityIndicator size="large" colors={colors.PRIMARY} />
      </View>
    )
  }

  if (!isLoading && !Boolean(availableProducts.length)) {
    return (
      <View style={_styles.loadingContainer}>
        <Text>No products found</Text>
      </View>
    )
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

const _styles = StyleSheet.create({
  loadingContainer: sharedStyles.STRETCH_AND_CENTER
})
