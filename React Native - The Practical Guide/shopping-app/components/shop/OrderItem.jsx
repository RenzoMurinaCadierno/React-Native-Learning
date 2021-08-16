import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import CartItem from "./CartItem"
import colors from "../../constants/colors"
import * as sharedStyles from "../../constants/styles"

export default function OrderItem({ total, date, items }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <View style={_styles.container}>
      <Text style={_styles.date}>{date}</Text>
      <View style={_styles.totalAndButton}>
        <Text style={_styles.total}>Total: $ {total.toFixed(2)}</Text>
        <View style={_styles.detailsButton}>
          <Button
            title={showDetails ? "Hide details" : "Show details"}
            color={colors.PRIMARY}
            onPress={() => setShowDetails((st) => !st)}
          />
        </View>
      </View>
      {showDetails && (
        <View style={_styles.cartItemsContainer}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              quantity={item.quantity}
              amount={item.sum}
              title={item.title}
            />
          ))}
        </View>
      )}
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.CARD_SHADOW,
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  date: {
    marginLeft: "auto",
    marginBottom: 10,
    fontFamily: "open-sans",
    fontSize: 16,
    color: "#888"
  },
  totalAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  total: { fontFamily: "open-sans-bold", fontSize: 16 },
  detailsButton: { width: "40%" },
  cartItemsContainer: { marginTop: 5 }
})
