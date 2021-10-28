import React from "react"
import Base from "./Base"
import useSetAnimatedValue from "@app-hooks/useSetAnimatedValue"
import { interpolate } from "@app-utils/functions"

export default function TextWithShrinkTransition({
  value,
  style,
  direction,
  size,
  children,
  ...rest
}) {
  const val = useSetAnimatedValue(value)

  return (
    <Base
      animated
      style={[
        {
          opacity: interpolate(val, [1, 0], "clamp"),
          height: interpolate(val, [size * 3, 0], "clamp"),
          transform: [{ scaleY: interpolate(val, [1, 0], "clamp") }]
        },
        style
      ]}
      size={size}
      {...rest}
    >
      {children}
    </Base>
  )
}

TextWithShrinkTransition.defaultProps = { size: 18 }
