import React from "react"
import { Button, FlatList } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import * as productActions from "../../store/actions/products"
import colors from "../../constants/colors"

export default function UserProducts(props) {
  const userProducts = useSelector((state) => state.products.userProducts)
  const dispatch = useDispatch()

  const handleEditProduct = (id) => {
    props.navigation.navigate("EditProduct", { productId: id })
  }

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => handleEditProduct(item.id)}
        >
          <Button
            color={colors.PRIMARY}
            title="Edit"
            onPress={() => handleEditProduct(item.id)}
          />
          <Button
            color={colors.PRIMARY}
            title="Delete"
            onPress={() => dispatch(productActions.deleteProduct(item.id))}
          />
        </ProductItem>
      )}
    />
  )
}

UserProducts.navigationOptions = ({ navigation }) => ({
  headerTitle: "Your products",
  headerLeft: () => (
    <CustomHeaderButtons
      title="Menu"
      iconName="menu"
      onPress={navigation.toggleDrawer}
    />
  ),
  headerRight: () => (
    <CustomHeaderButtons
      title="Add"
      iconName="create"
      onPress={() => navigation.navigate("EditProduct")} // NO params!
    />
  )
})
