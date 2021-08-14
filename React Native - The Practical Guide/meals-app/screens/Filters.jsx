import React, { useCallback, useEffect, useState } from "react"
import { View, Text, StyleSheet, Switch, Platform } from "react-native"
import { useDispatch } from "react-redux"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import { colors } from "../constants/colors"
import { setFilters } from "../store/actions/meals"

export default function Filters({ navigation }) {
  const [isGluttenFree, setIsGluttenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGluttenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    }

    dispatch(setFilters(appliedFilters))
  }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  useEffect(() => {
    // merges navigation param values for current screen
    navigation.setParams({ save: saveFilters })
    // no navigation on dependencies! It always reconstructs
  }, [saveFilters])

  return (
    <View style={_styles.container}>
      <Text style={_styles.title}>Filters</Text>
      <FilterSwitch
        title="Gluten-free"
        value={isGluttenFree}
        onValueChange={setIsGluttenFree}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <FilterSwitch title="Vegan" value={isVegan} onValueChange={setIsVegan} />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
    </View>
  )
}

Filters.navigationOptions = ({ navigation }) => ({
  headerTitle: "Filter meals",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="save"
        iconName="ios-save"
        // trigger the function passed above as new param
        onPress={navigation.getParam("save")}
      />
    </HeaderButtons>
  )
})

const _styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
})

const FilterSwitch = ({ title, value, onValueChange }) => {
  return (
    <View style={_styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        trackColor={{
          true: Platform.OS === "android" ? colors.PRIMARY : "",
          false: ""
        }}
        thumbColor={Platform.OS === "android" ? colors.PRIMARY : ""}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  )
}
