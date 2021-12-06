import React from "react"
import IconWithCircle from "../Icon/IconWithCircle"
import { useLinearAnimatedValue } from "@app-hooks"
import { colors } from "@app-constants"

export default function DraggableItem({
  panHandlers,
  onChildLayout,
  ready,
  onChildReady,
  containerStyle,
  containerProps,
  color,
  ...rest
}) {
  const animatedValue = useLinearAnimatedValue({ active: ready })

  const setIconMeasuresInRootAndInTranslate2D = (e) => {
    onChildLayout(e)
    onChildReady(e.nativeEvent.layout.height)
  }

  return (
    <IconWithCircle
      {...rest}
      containerStyle={{ ...containerStyle, opacity: animatedValue }}
      containerProps={{
        ...containerProps,
        ...panHandlers,
        onLayout: setIconMeasuresInRootAndInTranslate2D
      }}
      color={color}
      borderColor={color}
      backgroundColor={
        color
          ? colors.background.CONTRAST_ALPHA(0.5)
          : colors.accent.PRIMARY_ALPHA(0.5)
      }
      enableAnimation
    />
  )
}
