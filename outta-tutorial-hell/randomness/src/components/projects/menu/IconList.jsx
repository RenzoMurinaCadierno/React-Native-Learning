import React from "react"
import { FlatList, StyleSheet } from "react-native"
import UI from "@app-components/UI"

export default function IconList({ icons, fontScale, ...rest }) {
  const renderItem = ({ item }) => (
    <UI.Icon.WithSpring
      active={true}
      name={item.name}
      color={item.activeColor}
      size={fontScale}
      style={_styles.icon}
    />
  )

  return (
    <FlatList
      data={icons}
      keyExtractor={_keyExtractor}
      renderItem={renderItem}
      style={_styles.container}
      contentContainerStyle={_styles.contentContainer}
      {...rest}
    />
  )
}

const _styles = StyleSheet.create({
  container: { width: "100%", flex: 1 },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: { marginVertical: "15%" }
})

function _keyExtractor(_, index) {
  return index.toString()
}
