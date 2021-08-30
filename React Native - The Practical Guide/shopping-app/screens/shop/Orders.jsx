import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import OrderItem from "../../components/shop/OrderItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import FetchViews from "../../UI/FetchViews"
import * as orderActions from "../../store/actions/orders"

export default function Orders(props) {
  const [isLoading, setIsLoading] = useState(true)
  const itemsInCart = useSelector((state) => state.orders.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(orderActions.fetchOrders()).then(() => setIsLoading(false))
  }, [dispatch, setIsLoading])

  return (
    <FetchViews
      isLoading={isLoading}
      responseGate={itemsInCart.length}
      emptyResponseMsg="No items found"
    >
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
    </FetchViews>
  )
}

export const screenOptions = ({ navigation }) => ({
  headerTitle: "Your orders",
  headerLeft: () => (
    <CustomHeaderButtons
      title="Menu"
      iconName="menu"
      onPress={navigation.toggleDrawer}
    />
  )
})
