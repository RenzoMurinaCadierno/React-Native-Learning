import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import MealItem from "./MealItem"

export default function MealList({ data, navigation }) {
  // forward favoriteMeal from here to preload the star on MealDetails load.
  // Otherwise, the star will flicker (will load on screen render)
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  const renderItem = (data) => {
    const isFav = favoriteMeals.find((meal) => meal.id === data.item.id)

    return (
      <MealItem
        title={data.item.title}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        imageUrl={data.item.imageUrl}
        onPress={() =>
          navigation.navigate({
            routeName: "MealDetails",
            params: { mealId: data.item.id, mealTitle: data.item.title, isFav }
          })
        }
      />
    )
  }

  return (
    <View style={_styles.container}>
      <FlatList
        {...{ data, renderItem }}
        // keyExtractor={(item, i) => item.id} // not necessary!
        style={{ width: "95%", marginTop: "2%" }}
      />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
