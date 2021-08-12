import React from "react"
import { ScrollView, View, Text, StyleSheet, Image } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import DefaultText from "../components/DefaultText"
import CustomHeaderButton from "../components/HeaderButton"
import { MEALS } from "../data/dummy"

export default function MealDetails(props) {
  const mealId = props.navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={_styles.image} />
      <View style={[_styles.details]}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <BasicList data={selectedMeal.ingredients} title="Ingredients" />
      <BasicList data={selectedMeal.steps} title="Steps" />
    </ScrollView>
  )
}

MealDetails.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam("mealId")
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        {/* you can have multiple '*Item*' inside '*HeaderButton*' */}
        {/* `title` is used as key and for aria */}
        {/* `iconName` is the vector-icons target icon name */}
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
  }
}

const _styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: { fontFamily: "open-sans-bold", fontSize: 20, textAlign: "center" },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
})

function BasicList({ data, title }) {
  return (
    <>
      <Text style={_styles.title}>{title}</Text>
      {data.map((item) => (
        <View key={item} style={_styles.listItem}>
          <DefaultText>{item}</DefaultText>
        </View>
      ))}
    </>
  )
}
