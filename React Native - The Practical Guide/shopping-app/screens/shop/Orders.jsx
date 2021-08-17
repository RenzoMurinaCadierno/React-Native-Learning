import React from "react"
import { FlatList } from "react-native"
import { useSelector } from "react-redux"
import OrderItem from "../../components/shop/OrderItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"

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
    <CustomHeaderButtons
      title="Menu"
      iconName="menu"
      onPress={navigation.toggleDrawer}
    />
  )
})
