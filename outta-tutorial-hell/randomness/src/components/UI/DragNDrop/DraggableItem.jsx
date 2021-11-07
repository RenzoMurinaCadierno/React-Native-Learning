import React from "react"
import IconWithCircle from "../Icon/IconWithCircle"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import colors from "@app-constants/colors"

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
  const val = useLinearAnimatedValue({ active: ready })

  const setIconMeasuresInRootAndInTranslate2D = (e) => {
    onChildLayout(e)
    onChildReady(e.nativeEvent.layout.height)
  }

  return (
    <IconWithCircle
      {...rest}
      containerStyle={{ ...containerStyle, opacity: val }}
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
