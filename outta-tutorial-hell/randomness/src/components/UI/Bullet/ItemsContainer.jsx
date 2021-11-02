import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import Item from "./Item"

export default function ItemsContainer({
  activeItemName,
  fontScale,
  style,
  coords,
  onIconMove,
  onItemLayout,
  a,
  ...rest
}) {
  const bulletItems = useSelector((state) => state.contact.bulletItems)

  return (
    <View style={[_styles.container, style]} {...rest}>
      <Text style={{ position: "absolute", bottom: 0 }}>
        icon {coords.toFixed(2)}
      </Text>
      <Text style={{ position: "absolute", bottom: 20 }}>
        email {a?.email?.[0]?.toFixed(2)} - {a?.email?.[1]?.toFixed(2)}
      </Text>
      <Text style={{ position: "absolute", bottom: 40 }}>
        github {a?.github?.[0]?.toFixed(2)} - {a?.github?.[1]?.toFixed(2)}
      </Text>
      <Text style={{ position: "absolute", bottom: 60 }}>
        in {a?.linkedin?.[0]?.toFixed(2)} - {a?.linkedin?.[1]?.toFixed(2)}
      </Text>
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
