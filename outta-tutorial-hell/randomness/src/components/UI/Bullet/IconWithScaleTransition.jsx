import React from "react"
import Scale from "../Animation/Scale"
import Icon from "./Icon"
import animations from "@app-constants/animations"

export default function IconWithScaleTransition({
  active,
  transformStyle,
  ...rest
}) {
  return (
    <Scale
      Component={null}
      active={active}
      activeAnimation={animations.icons.scale.IN}
      inactiveAnimation={animations.icons.scale.OUT}
      scaleOutputRange={[0.9, 1.1]}
    >
      {(scaleStyle) => (
        <Icon
          {...rest}
          iconContainerStyle={_mergeStyles(transformStyle, scaleStyle)}
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
