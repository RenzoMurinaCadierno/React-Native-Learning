import React from "react"
import { FlatList, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import { useSelector } from "react-redux"

export default function IconList({ fontScale, onIconPress, ...rest }) {
  const { icons, activeIconId } = useSelector((state) => state.projects)

  const renderItem = ({ item }) => (
    <UI.Icon.WithSpring
      active={item.id === activeIconId}
      name={item.name}
      color={item.activeColor}
      size={fontScale}
      style={_styles.icon}
      onPress={() => onIconPress(item.id)}
    />
  )

  return (
    <FlatList
      data={icons}
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
