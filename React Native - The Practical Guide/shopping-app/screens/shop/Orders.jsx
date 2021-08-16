import React from "react"
import { FlatList, Platform, Text } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux"
import OrderItem from "../../components/shop/OrderItem"
import CustomHeaderButton from "../../UI/CustomHeaderButton"

export default function Orders(props) {
  const itemsInCart = useSelector((state) => state.orders.items)

  return (
    <FlatList
      data={itemsInCart}
      renderItem={({ item }) => (
        <OrderItem
          total={item.total}
          date={item.stringDate}
          items={item.items}
        />
      )}
    />
  )
}

Orders.navigationOptions = ({ navigation }) => ({
  headerTitle: "You orders",
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
