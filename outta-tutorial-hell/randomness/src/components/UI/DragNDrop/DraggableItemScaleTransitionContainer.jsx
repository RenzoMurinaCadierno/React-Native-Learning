import React from "react"
import Scale from "../Animation/Scale"
import DraggableItem from "./DraggableItem"
import { animations } from "@app-constants"

export default function DraggableItemScaleTransitionContainer({
  active,
  transformStyle,
  ...rest
}) {
  return (
    <Scale
      Component={null}
      active={active}
      activeAnimation={animations.icons.dragNDrop.scale.IN}
      inactiveAnimation={animations.icons.dragNDrop.scale.OUT}
      scaleOutputRange={[1, 1.15]}
    >
      {(scaleStyle) => (
        <DraggableItem
          {...rest}
          containerStyle={_mergeStyles(transformStyle, scaleStyle)}
        />
      )}
    </Scale>
  )
}

function _mergeStyles(...styles) {
  const finalStyles = { transform: [] }

  styles.forEach((styleObj) => {
    for (styleName in styleObj) {
      if (styleName === "transform") {
        styleObj.transform.forEach((s) => finalStyles.transform.push(s))
      } else {
        finalStyles[styleName] = styleObj[styleName]
      }
    }
  })

  return finalStyles
}
