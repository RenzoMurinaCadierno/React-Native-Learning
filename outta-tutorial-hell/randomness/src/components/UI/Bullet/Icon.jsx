import React from "react"
import Translate2D from "../Animation/Translate2D"
import IconWithCircle from "../Icon/IconWithCircle"

export default function Icon({ layout, containerStyle, ...rest }) {
  return (
    <Translate2D axis="x" ranges={{ x: layout.width, y: layout.height }}>
      <IconWithCircle {...rest} />
    </Translate2D>
  )
}

Icon.defaultProps = { size: 40, type: "primary" }
