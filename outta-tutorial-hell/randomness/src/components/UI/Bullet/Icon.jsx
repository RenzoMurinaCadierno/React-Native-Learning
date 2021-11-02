import React from "react"
import IconWithCircle from "../Icon/IconWithCircle"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"

export default function Icon({
  transformStyle,
  panHandlers,
  onChildLayout,
  ready,
  onChildReady,
  containerStyle,
  iconContainerStyle,
  iconContainerProps,
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
      containerStyle={{
        ...iconContainerStyle,
        ...transformStyle,
        opacity: val
      }}
      containerProps={{
        ...iconContainerProps,
        ...panHandlers,
        onLayout: setIconMeasuresInRootAndInTranslate2D
      }}
      enableAnimation
    />
  )
}

Icon.defaultProps = { name: "checkmark", type: "primary" }
