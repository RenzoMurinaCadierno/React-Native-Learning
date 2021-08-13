import React from "react"
import { FlatList } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { CATEGORIES } from "../data/dummy"
import CategoryGridItem from "../components/CategoryGridItem"
import CustomHeaderButton from "../components/HeaderButton"

export default function Categories(props) {
  const renderItem = (data) => (
    <CategoryGridItem
      title={data.item.title}
      color={data.item.color}
      onPress={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: data.item.id }
        })
      }
    />
  )

  return <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
}

Categories.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
})
