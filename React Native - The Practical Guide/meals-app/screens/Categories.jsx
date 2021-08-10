import React from "react"
import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy"
import CategoryGridItem from "../components/CategoryGridItem"

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
