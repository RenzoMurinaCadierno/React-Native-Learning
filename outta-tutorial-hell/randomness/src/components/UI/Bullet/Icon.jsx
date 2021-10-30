import React from "react"
import IconWithCircle from "../Icon/IconWithCircle"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"

export default function Icon({
  transformStyle,
  panHandlers,
  onChildLayout,
  ready,
  containerStyle,
  iconContainerStyle,
  iconContainerProps,
  ...rest
}) {
  const val = useLinearAnimatedValue({ active: ready })

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
        onLayout: onChildLayout
      }}
      enableAnimation
    />
  )
}

Icon.defaultProps = { name: "checkmark", type: "primary" }
