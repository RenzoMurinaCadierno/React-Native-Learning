import React, { useCallback, useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import DraggableRootContainer from "./DraggableRootContainer"
import DroppableItemsZone from "./DroppableItemsZone"
import useLayout from "@app-hooks/useLayout"
import useViewPort from "@app-hooks/useViewPort"
import useControlledUpdate from "@app-hooks/useControlledUpdate"

export default function Root({
  droppables,
  fontScale,
  containerStyle,
  containerProps,
  droppableItemsZoneProps,
  ...rest
}) {
  const [iconHeight, setIconHeight] = useState(0)
  const [activeItemName, setActiveItemName] = useState("")
  const [isIconTouched, setIsIconTouched] = useState(false)
  const [containerLayout, onContainerLayoutChange] = useLayout()
  const viewPort = useViewPort()
  const [itemsYLimits] = useControlledUpdate({})

  const onChildReady = useCallback((height) => setIconHeight(height), [])

  const onIconMove = useCallback((_, { moveY }) => {
    setIsIconTouched(true)
    _setActiveItemName(moveY, itemsYLimits.get(), setActiveItemName)
  }, [])

  const onItemLayout = useCallback((itemName, itemDims) => {
    const itemTop = viewPort.height - itemDims.y
    itemsYLimits.updateObject({
      [itemName]: [itemTop, itemTop + itemDims.height]
    })
  }, [])

  useEffect(() => {
    if (iconHeight !== 0) {
      _arrangeAndDisplaceItemsLimits(itemsYLimits, iconHeight)
    }
  }, [iconHeight])

  return (
    <View
      style={[_styles.container, containerStyle]}
      onLayout={onContainerLayoutChange}
      {...containerProps}
    >
      <DroppableItemsZone
        droppables={droppables}
        activeItemName={activeItemName}
        fontScale={fontScale}
        onItemLayout={onItemLayout}
        {...droppableItemsZoneProps}
      />
      <>
        <DraggableRootContainer
          size={fontScale * 1.3}
          name={droppables[activeItemName]?.icon.name || "eye"}
          active={Boolean(droppables[activeItemName])}
          color={droppables[activeItemName]?.icon.activeColor}
          containerLayout={containerLayout}
          anchorXOffset={viewPort.vw(4)}
          anchorYOffset={viewPort.vh(1.5)}
          onPanResponderMove={onIconMove}
          onChildReady={onChildReady}
          {...rest}
        />
        {/* <IconDemo show={isIconTouched} /> */}
      </>
    </View>
  )
}

Root.defaultProps = {
  fontScale: 28,
  droppables: {},
  containerProps: {},
  droppableItemsZoneProps: {}
}

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
