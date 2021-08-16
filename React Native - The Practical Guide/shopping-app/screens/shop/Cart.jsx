import React from "react"
import { View, Text, FlatList, Button, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../components/shop/CartItem"
import * as cartActions from "../../store/actions/cart"
import * as orderActions from "../../store/actions/orders"
import * as sharedStyles from "../../constants/styles"
import colors from "../../constants/colors"

export default function Cart(props) {
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()

  const items = useSelector((state) => {
    const transformedCartItems = []
    for (const key in state.cart.items) {
      const currentItem = state.cart.items[key]
      transformedCartItems.push({
        id: key,
        title: currentItem.title,
        price: currentItem.price,
        quantity: currentItem.quantity,
        sum: currentItem.sum
      })
    }

    return transformedCartItems.sort((a, b) => (a.id > b.id ? 1 : -1))
  })

  return (
    <View style={_styles.container}>
      <View style={_styles.summary}>
        <Text style={_styles.summaryText}>
          Total:{"  "}
          <Text style={_styles.amount}>${total.toFixed(2)}</Text>
        </Text>
        <Button
          color={colors.SECONDARY}
          title="Order"
          disabled={items.length === 0}
          onPress={() => dispatch(orderActions.addOrder(items, total))}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, quantity, title, sum } }) => (
          <CartItem
            quantity={quantity}
            title={title}
            amount={sum}
            onDelete={() => dispatch(cartActions.removeFromCart(id))}
          />
        )}
      />
    </View>
  )
}

Cart.navigationOptions = {
  headerTitle: "You cart"
}

const _styles = StyleSheet.create({
  container: { margin: 20 },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    ...sharedStyles.CARD_SHADOW
  },
  summaryText: { fontFamily: "open-sans-bold", fontSize: 18 },
  amount: { color: colors.PRIMARY }
})
