import React, { useCallback, useRef, useState } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import IconContainer from "./IconContainer"
import ItemsContainer from "./ItemsContainer"
import useLayout from "@app-hooks/useLayout"
import useViewPort from "@app-hooks/useViewPort"

const windowHeight = Dimensions.get("window").height

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
  const itemsVerticalSpans = useRef({})
  const [a, setA] = useState({})

  const onIconMove = useCallback(
    ({ nativeEvent: { pageY, locationY } }, { moveY, ...rest }) => {
      setCoords({ y: moveY })
      // const tabHeight = windowHeight - layout.height
      // console.log(pageY - tabHeight, tabHeight)
      console.log(windowHeight - pageY)
      // console.log(
      //   _.nativeEvent.pageY,
      //   _.nativeEvent.locationY,
      //   _.nativeEvent.pageY - _.nativeEvent.locationY
      // )
    },
    [layout]
  )

  const onItemLayout = useCallback(
    (itemName, { y, height }) => {
      itemsVerticalSpans.current[itemName] = [y, y + height]
      // setA((a) => ({ ...a, [itemName]: [y, y + height] }))
      setA((a) => ({
        ...a,
        [itemName]: [
          windowHeight - layout.height - y,
          windowHeight - layout.height - y + height
        ]
      }))
      // +0, +1.5
    },
    [layout]
  )

  return (
    <View
      style={[_styles.container, containerStyle]}
      onLayout={onLayoutChange}
      {...containerProps}
    >
      <ItemsContainer
        coords={coords}
        a={a}
        fontScale={size}
        onItemLayout={onItemLayout}
      />
      {Boolean(layout.width) && (
        <IconContainer
          size={size * 1.5}
          startingAnchor={{
            x: layout.width - vw(4),
            y: layout.height - vh(1.5)
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
