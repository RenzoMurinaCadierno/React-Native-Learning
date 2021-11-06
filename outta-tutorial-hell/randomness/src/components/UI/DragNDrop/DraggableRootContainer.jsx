import React, { useEffect, useState } from "react"
import DraggableItemTranslate2DContainer from "./DraggableItemTranslate2DContainer"
import { Obj } from "@app-utils/functions"

export default function DraggableRootContainer({
  ranges,
  containerLayout,
  startingAnchor,
  anchorXOffset,
  anchorYOffset,
  ...rest
}) {
  const [limits, setLimits] = useState({ ranges, startingAnchor })
  const [ready, setReady] = useState(false)

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

  return ready && <DraggableItemTranslate2DContainer {...limits} {...rest} />
}

DraggableRootContainer.defaultProps = { anchorXOffset: 0, anchorYOffset: 0 }
