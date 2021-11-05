import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import Item from "./Item"

export default function ItemsContainer({
  activeItemName,
  fontScale,
  style,
  onIconMove,
  onItemLayout,
  ...rest
}) {
  const bulletItems = useSelector((state) => state.contact.bulletItems)

  return (
    <View style={[_styles.container, style]} {...rest}>
      {bulletItems.map((bullet) => (
        <Item
          key={bullet.id}
          active={bullet.name === activeItemName}
          backgroundColor={bullet.icon.activeColor}
          fontScale={fontScale}
          onLayout={onItemLayout}
          {...bullet}
        />
      ))}
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: 30
  }
})
