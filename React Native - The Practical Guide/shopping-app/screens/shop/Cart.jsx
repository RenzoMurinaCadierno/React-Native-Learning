import React, { useState } from "react"
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../../components/shop/CartItem"
import Card from "../../UI/Card"
import * as cartActions from "../../store/actions/cart"
import * as orderActions from "../../store/actions/orders"
import colors from "../../constants/colors"

export default function Cart(props) {
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSendOrder = async () => {
    setIsLoading(true)
    await dispatch(orderActions.addOrder(items, total))
    setIsLoading(false)
  }

  return (
    <View style={_styles.container}>
      <Card style={_styles.summary}>
        <Text style={_styles.summaryText}>
          Total:{"  "}
          <Text style={_styles.amount}>
            ${Math.round(total.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.PRIMARY} />
        ) : (
          <Button
            color={colors.SECONDARY}
            title="Order"
            disabled={items.length === 0}
            onPress={handleSendOrder}
          />
        )}
      </Card>
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

export const screenOptions = { headerTitle: "Your cart" }

const _styles = StyleSheet.create({
  container: { margin: 20 },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10
  },
  summaryText: { fontFamily: "open-sans-bold", fontSize: 18 },
  amount: { color: colors.PRIMARY }
})
