import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import TouchableComponent from "../../UI/TouchableComponent"

export default function CartItem({ quantity, title, amount, onDelete }) {
  return (
    <View style={_styles.container}>
      <View style={_styles.itemData}>
        <Text style={_styles.quantity}>{quantity}</Text>
        <Text style={_styles.mainText}>{title}</Text>
      </View>
      <View style={_styles.itemData}>
        <Text style={_styles.mainText}>${amount.toFixed(2)}</Text>
        <TouchableComponent onPress={onDelete} style={_styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableComponent>
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 20
  },
  itemData: { flexDirection: "row", alignItems: "center" },
  quantity: { fontFamily: "open-sans", color: "#888", fontSize: 16 },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginHorizontal: 10
  },
  deleteButton: { marginLeft: 20 }
})
