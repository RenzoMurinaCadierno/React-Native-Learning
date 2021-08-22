import React, { useEffect, useState, useCallback } from "react"
import { FlatList, Button } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import FetchViews from "../../UI/FetchViews"
import * as cartActions from "../../store/actions/cart"
import * as productsActions from "../../store/actions/products"
import colors from "../../constants/colors"

export default function ProductsOverview(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  )
  const dispatch = useDispatch()

  const loadProducts = useCallback(async () => {
    setErrorMsg("")
    setIsRefreshing(true)

    try {
      await dispatch(productsActions.fetchProducts())
    } catch (err) {
      // error object comes from Firebase. It has "message" key
      setErrorMsg(err.message)
    }

    setIsRefreshing(false)
  }, [setIsRefreshing, dispatch, setErrorMsg])

  useEffect(() => {
    setIsLoading(true)
    loadProducts().then(() => setIsLoading(false))
  }, [dispatch, loadProducts, setIsLoading])

  useEffect(() => {
    // willFocus, willBlur, didFocus, didBlur
    // > there are new methods on react-navigation ^6: focus, blur
    // > also, hooks like `useIsFocused`, `useFocusEffect`
    const willFocusSub = props.navigation.addListener("willFocus", loadProducts)
    return () => willFocusSub.remove()
  }, [loadProducts])

  const handleSelectItem = (id, title) => {
    props.navigation.navigate("ProductDetails", {
      productId: id,
      productTitle: title
    })
  }

  return (
    <FetchViews
      errorMsg={errorMsg}
      errorButtonProps={{ title: "Refetch", onPress: loadProducts }}
      emptyResponseMsg="No products found"
      isLoading={isLoading}
      responseGate={availableProducts.length}
    >
      <FlatList
        data={availableProducts}
        keyExtractor={(item) => item.id} // not neccesary on newer versions!
        refreshing={isRefreshing}
        onRefresh={loadProducts}
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
    </FetchViews>
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
