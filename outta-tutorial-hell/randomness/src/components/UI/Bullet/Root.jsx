import React, { useCallback, useRef, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import IconContainer from "./IconContainer"
import ItemsContainer from "./ItemsContainer"
import useLayout from "@app-hooks/useLayout"
import useViewPort from "@app-hooks/useViewPort"

export default function Root({
  size,
  containerStyle,
  containerProps,
  items,
  ...rest
}) {
  const [layout, onLayoutChange] = useLayout()
  const { vw, vh } = useViewPort()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const itemsLayouts = useRef({})

  const onIconMove = useCallback((_, { moveX, moveY }) => {
    setCoords({ x: moveX, y: moveY })
  }, [])

  const onItemLayout = useCallback((itemName, itemLayout) => {
    itemsLayouts.current[itemName] = itemLayout
    this doesnt work. try .measure
    https://stackoverflow.com/questions/30096038/react-native-getting-the-position-of-an-element
  }, [])

  return (
    <View
      style={[_styles.container, containerStyle]}
      onLayout={onLayoutChange}
      {...containerProps}
    >
      <ItemsContainer
        coords={coords}
        fontScale={size}
        onItemLayout={onItemLayout}
      />
      {Boolean(layout.width) && (
        <IconContainer
          size={size * 1.5}
          startingAnchor={{
            y: layout.height - vh(1.5),
            x: layout.width - vw(4)
          }}
          ranges={{ x: layout.width, y: layout.height }}
          onPanResponderMove={onIconMove}
          {...rest}
        />
      )}
    </View>
  )
}
// work on background. make item draggable to uncover.
// Then spinning animation, or fading animations on orientation to indicate where
// to slide o o o
Root.defaultProps = { size: 28, items: {}, containerProps: {} }

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignSelf: "stretch"
  }
})
