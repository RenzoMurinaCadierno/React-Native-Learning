import React, { useCallback, useRef, useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import IconContainer from "./IconContainer"
import ItemsContainer from "./ItemsContainer"
import useLayout from "@app-hooks/useLayout"
import useViewPort from "@app-hooks/useViewPort"
import { reverseObject } from "@app-utils/functions"

export default function Root({
  size,
  containerStyle,
  containerProps,
  items,
  ...rest
}) {
  const [containerLayout, onContainerLayoutChange] = useLayout()
  const viewPort = useViewPort()
  const [iconCoordY, setIconCoordY] = useState(0)
  const [iconHeight, setIconHeight] = useState(0)
  const [activeItemName, setActiveItemName] = useState("")
  const itemsVerticalSpans = useRef({})
  const [a, setA] = useState({})

  const onChildReady = useCallback((height) => setIconHeight(height), [])

  const onIconMove = useCallback(
    ({ nativeEvent: { pageY, locationY } }, { moveY, ...rest }) => {
      // setIconCoordY(moveY)
      setIconCoordY(moveY)
      _setActiveItemName(moveY, itemsVerticalSpans.current, setActiveItemName)
    },
    []
  )
  // console.log(activeItemName)
  const onItemLayout = useCallback(
    (itemName, itemDims) => {
      const itemTop = viewPort.height - itemDims.y
      itemsVerticalSpans.current[itemName] = [
        itemTop,
        itemTop + itemDims.height
      ]
      setA((a) => ({ ...a, [itemName]: [itemTop, itemTop + itemDims.height] }))
    },
    [iconHeight]
  )

  useEffect(() => {
    if (iconHeight !== 0) {
      _arrangeAndDisplaceItemsSpans(itemsVerticalSpans.current, iconHeight)
      setA((a) =>
        Object.entries(a).reduce(
          (acc, [itemName, itemMeasures]) => ({
            ...acc,
            [itemName]: [
              itemMeasures[0] - iconHeight,
              itemMeasures[1] - iconHeight
            ]
          }),
          {}
        )
      )
    }
  }, [iconHeight])

  return (
    <View
      style={[_styles.container, containerStyle]}
      onLayout={onContainerLayoutChange}
      {...containerProps}
    >
      <ItemsContainer
        coords={iconCoordY}
        activeItemName={activeItemName}
        a={a}
        fontScale={size}
        onItemLayout={onItemLayout}
      />
      {Boolean(containerLayout.width) && (
        <IconContainer
          size={size * 1.5}
          startingAnchor={{
            x: containerLayout.width - viewPort.vw(4),
            y: containerLayout.height - viewPort.vh(1.5)
          }}
          ranges={{ x: containerLayout.width, y: containerLayout.height }}
          onPanResponderMove={onIconMove}
          onChildReady={onChildReady}
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
  container: { flex: 1, position: "relative", alignSelf: "stretch" }
})

function _arrangeAndDisplaceItemsSpans(itemsVerticalSpans, iconHeight) {
  let itemsEntries = Object.entries(itemsVerticalSpans)

  for (let i = 0; i <= Math.floor(itemsEntries.length / 2); i++) {
    const spansForCurrentEntry = itemsEntries[i][1]
    const spansForMirrorEntry = itemsEntries[itemsEntries.length - 1 - i][1]

    _substractIconHeightFromItemSpans(spansForCurrentEntry, iconHeight)
    _substractIconHeightFromItemSpans(spansForMirrorEntry, iconHeight)

    itemsEntries[i][1] = spansForMirrorEntry
    itemsEntries[itemsEntries.length - 1 - i][1] = spansForCurrentEntry
  }
  // console.log(itemsEntries)
  // itemsVerticalSpans = itemsEntries
}

function _substractIconHeightFromItemSpans(verticalSpans, iconHeight) {
  // console.log(verticalSpans, iconHeight)
  for (let span of verticalSpans) span -= iconHeight
  does not substract
  console.log(verticalSpans, iconHeight)
}

function _setActiveItemName(moveY, itemsVerticalSpans, setActiveItemName) {
  for (itemName in itemsVerticalSpans) {
    if (
      moveY >= itemsVerticalSpans[itemName][0] &&
      moveY <= itemsVerticalSpans[itemName][1]
    ) {
      return setActiveItemName(itemName)
    }
  }
  setActiveItemName("")
}
