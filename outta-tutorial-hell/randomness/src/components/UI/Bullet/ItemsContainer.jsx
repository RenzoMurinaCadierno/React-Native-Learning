import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import Item from "./Item"

export default function ItemsContainer({
  fontScale,
  style,
  coords,
  onIconMove,
  onItemLayout,
  ...rest
}) {
  const bulletItems = useSelector((state) => state.contact.bulletItems)

  return (
    <View style={[_styles.container, style]} {...rest}>
      <Text style={{ position: "absolute", bottom: 0 }}>
        {coords.x.toFixed(2)} - {coords.y.toFixed(2)}
      </Text>
      {bulletItems.map((bullet) => (
        <Item
          active
          key={bullet.id}
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
