import React from "react"
import Translate2D from "../Animation/Translate2D"
import Icon from "./Icon"

export default function IconContainer({
  axis,
  ranges,
  decayOnRelease,
  startingAnchor,
  onPanResponderMove,
  ...rest
}) {
  return (
    <Translate2D
      {...{ axis, ranges, decayOnRelease, startingAnchor, onPanResponderMove }}
    >
      {(translate2DArgs) => <Icon {...rest} {...translate2DArgs} />}
    </Translate2D>
  )
}

IconContainer.defaultProps = { axis: null, decayOnRelease: true }
