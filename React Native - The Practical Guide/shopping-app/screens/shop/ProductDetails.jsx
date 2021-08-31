import React from "react"
import { View, ScrollView, Text, Image, Button, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import colors from "../../constants/colors"
import * as cartActions from "../../store/actions/cart"

export default function ProductDetails(props) {
  const productId = props.route.params.productId
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  )
  const dispatch = useDispatch()

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={_styles.image} />
      <View style={_styles.buttonContainer}>
        <Button
          color={colors.PRIMARY}
          title="Add to cart"
          onPress={() => dispatch(cartActions.addToCart(selectedProduct))}
        />
      </View>
      <Text style={_styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={_styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  )
}

export const screenOptions = ({ route }) => ({
  headerTitle: route.params.productTitle
})

const _styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  buttonContainer: { margin: 10, alignItems: "center" },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold"
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans"
  }
})
