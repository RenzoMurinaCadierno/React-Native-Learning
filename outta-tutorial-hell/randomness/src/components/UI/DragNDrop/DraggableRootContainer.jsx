import React, { useCallback, useEffect, useState } from "react"
import DraggableItemTranslate2DContainer from "./DraggableItemTranslate2DContainer"
import DraggableItemDemo from "./DraggableItemDemo"
import { Obj } from "@app-utils/functions"

export default function DraggableRootContainer({
  size,
  ranges,
  containerLayout,
  startingAnchor,
  anchorXOffset,
  anchorYOffset,
  showDemo,
  ...rest
}) {
  const [limits, setLimits] = useState({ ranges, startingAnchor })
  const [ready, setReady] = useState(false)
  const [isIconTouched, setIsIconTouched] = useState(false)

  const touchIcon = useCallback(() => {
    setIsIconTouched(true)
  }, [])

  useEffect(() => {
    if (Boolean(containerLayout.width)) {
      const layoutLimits = {
        x: containerLayout.width,
        y: containerLayout.height
      }

      setLimits({
        startingAnchor: Obj.hasAllProperties(limits.startingAnchor, "x", "y")
          ? limits.startingAnchor
          : {
              x: layoutLimits.x - anchorXOffset,
              y: layoutLimits.y - anchorYOffset
            },
        ranges: Obj.hasAllProperties(limits.ranges, "x", "y")
          ? limits.ranges
          : layoutLimits
      })
      setReady(true)
    }
  }, [containerLayout.width])

  return (
    ready && (
      <>
        {showDemo && (
          <DraggableItemDemo
            active={!isIconTouched}
            name="eye"
            size={size}
            anchor={limits.startingAnchor}
            offsets={{ x: anchorXOffset, y: anchorYOffset }}
          />
        )}
        <DraggableItemTranslate2DContainer
          size={size}
          {...limits}
          {...rest}
          onPanResponderGrant={touchIcon}
        />
      </>
    )
  )
}

DraggableRootContainer.defaultProps = { anchorXOffset: 0, anchorYOffset: 0 }
