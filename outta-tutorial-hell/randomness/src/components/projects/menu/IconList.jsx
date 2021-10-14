import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import UI from "@app-components/UI"
import animations from "@app-constants/animations"

const colorProps = {
  activeAnimation: animations.icons.color.IN,
  inactiveAnimation: animations.icons.color.OUT
}

export default function IconList({ fontScale, onIconPress, ...rest }) {
  const { icons, activeIconId } = useSelector((state) => state.projects)

  const renderItem = ({ item }) => (
    <UI.Icon.WithSpring
      active={item.id === activeIconId}
      name={item.name}
      activeColor={item.activeColor}
      size={fontScale}
      style={_styles.icon}
      onPress={() => onIconPress(item.id)}
      colorProps={colorProps}
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
