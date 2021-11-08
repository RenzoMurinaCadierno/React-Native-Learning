import React from "react"
import { View, StyleSheet } from "react-native"
import DroppableItem from "./DroppableItem"

export default function DroppableItemsZone({
  droppables,
  activeItemName,
  fontScale,
  style,
  onIconMove,
  onItemLayout,
  droppableItemProps,
  ...rest
}) {
  return (
    <View style={[_styles.container, style]} {...rest}>
      {Object.entries(droppables).map(([name, { id, icon, ...otherProps }]) => (
        <DroppableItem
          key={id}
          name={name}
          active={name === activeItemName}
          backgroundColor={icon.activeColor}
          fontScale={fontScale}
          onLayout={onItemLayout}
          {...otherProps}
          {...droppableItemProps}
        />
      ))}
    </View>
  )
}

DroppableItemsZone.defaultProps = {
  droppables: [],
  fontScale: 28,
  droppableItemProps: {}
}

const _styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-evenly", marginBottom: 30 }
})
