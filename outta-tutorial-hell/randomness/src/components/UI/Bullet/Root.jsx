import React, { useCallback, useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import IconContainer from "./IconContainer"
import ItemsContainer from "./ItemsContainer"
import useLayout from "@app-hooks/useLayout"
import useViewPort from "@app-hooks/useViewPort"
import useControlledUpdate from "@app-hooks/useControlledUpdate"

export default function Root({
  size,
  containerStyle,
  containerProps,
  items,
  ...rest
}) {
  const bullets = useSelector((state) => state.contact.bullets)
  const [iconCoordY, setIconCoordY] = useState(0)
  const [iconHeight, setIconHeight] = useState(0)
  const [activeItemName, setActiveItemName] = useState("")
  const [a, setA] = useState({})
  const [containerLayout, onContainerLayoutChange] = useLayout()
  const viewPort = useViewPort()
  const [itemsYLimits] = useControlledUpdate({})

  const onChildReady = useCallback((height) => setIconHeight(height), [])

  const onIconMove = useCallback((_, { moveY }) => {
    setIconCoordY(moveY)
    _setActiveItemName(moveY, itemsYLimits.get(), setActiveItemName)
  }, [])

  const onItemLayout = useCallback(
    (itemName, itemDims) => {
      const itemTop = viewPort.height - itemDims.y
      itemsYLimits.updateObject({
        [itemName]: [itemTop, itemTop + itemDims.height]
      })
      setA((a) => ({ ...a, [itemName]: [itemTop, itemTop + itemDims.height] }))
    },
    [iconHeight]
  )

  useEffect(() => {
    if (iconHeight !== 0) {
      _arrangeAndDisplaceItemsLimits(itemsYLimits, iconHeight)
      setA(itemsYLimits.get())
    }
  }, [iconHeight])
  change icon colors and add color transition
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
          name={bullets[activeItemName]?.icon.name || "heart"}
          backgroundColor={bullets[activeItemName]?.icon.activeColor}
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

function _arrangeAndDisplaceItemsLimits(itemsYLimits, iconHeight) {
  let itemsYLimitsEntries = Object.entries(itemsYLimits.get())

  for (let i = 0; i <= Math.floor(itemsYLimitsEntries.length / 2); i++) {
    const limitsForCurrentEntry = itemsYLimitsEntries[i][1]
    const limitsForMirrorEntry =
      itemsYLimitsEntries[itemsYLimitsEntries.length - 1 - i][1]

    itemsYLimitsEntries[i][1] = limitsForMirrorEntry.map(
      (limit) => limit - iconHeight
    )
    itemsYLimitsEntries[itemsYLimitsEntries.length - 1 - i][1] =
      limitsForCurrentEntry.map((limit) => limit - iconHeight)
  }
  itemsYLimits.update(Object.fromEntries(itemsYLimitsEntries))
}

function _setActiveItemName(moveY, itemsYLimits, setActiveItemName) {
  for (itemName in itemsYLimits) {
    if (
      moveY >= itemsYLimits[itemName][0] &&
      moveY <= itemsYLimits[itemName][1]
    ) {
      return setActiveItemName(itemName)
    }
  }
  setActiveItemName("")
}
