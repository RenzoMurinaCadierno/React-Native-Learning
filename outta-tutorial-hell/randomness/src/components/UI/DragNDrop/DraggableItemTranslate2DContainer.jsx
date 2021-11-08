import React from "react"
import Translate2D from "../Animation/Translate2D"
import DraggableItemScaleTransitionContainer from "./DraggableItemScaleTransitionContainer"

export default function IconContainer({
  axis,
  ranges,
  decayOnRelease,
  startingAnchor,
  onPanResponderGrant,
  onPanResponderMove,
  ...rest
}) {
  return (
    <Translate2D
      {...{
        axis,
        startingAnchor,
        ranges,
        decayOnRelease,
        onPanResponderGrant,
        onPanResponderMove
      }}
    >
      {(translate2DArgs) => (
        <DraggableItemScaleTransitionContainer {...rest} {...translate2DArgs} />
      )}
    </Translate2D>
  )
}

IconContainer.defaultProps = { axis: null, decayOnRelease: true }
