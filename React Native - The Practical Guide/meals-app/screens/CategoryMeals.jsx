import React from "react"
import { View, StyleSheet, FlatList } from "react-native"
import MealItem from "../components/MealItem"
import { CATEGORIES, MEALS } from "../data/dummy"

export default function CategoryMeals(props) {
  const categoryId = props.navigation.getParam("categoryId")

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) !== -1
  )

  const renderItem = (data) => (
    <MealItem
      title={data.item.title}
      duration={data.item.duration}
      complexity={data.item.complexity}
      affordability={data.item.affordability}
      imageUrl={data.item.imageUrl}
      onPress={() => {}}
    />
  )

  return (
    <View style={_styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderItem}
        keyExtractor={(item, i) => item.id} // not necessary!
        style={{ width: "95%", marginTop: "2%" }}
      />
    </View>
  )
}

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId)

  return { headerTitle: selectedCategory.title }
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
})
