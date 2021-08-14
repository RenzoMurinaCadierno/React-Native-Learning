import React from "react"
import { View, StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useSelector } from "react-redux"
import DefaultText from "../components/DefaultText"
import CustomHeaderButton from "../components/HeaderButton"
import MealList from "../components/MealList"

export default function Favorites(props) {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  if (!favoriteMeals || !favoriteMeals.length) {
    return (
      <View style={_styles.container}>
        <DefaultText>No favorite meals. Start adding some!</DefaultText>
      </View>
    )
  }

  return <MealList data={favoriteMeals} navigation={props.navigation} />
}

Favorites.navigationOptions = ({ navigation }) => ({
  headerTitle: "Your favorites",
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

const _styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
})
