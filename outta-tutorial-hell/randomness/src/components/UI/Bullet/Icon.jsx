import React from "react"
import Translate2D from "../Animation/Translate2D"
import IconWithCircle from "../Icon/IconWithCircle"

export default function Icon({ layout, containerStyle, ...rest }) {
  return (
    <Translate2D axis="xy" ranges={{ x: layout.width, y: layout.height }}>
      {({ transformStyle, panHandlers }) => (
        <IconWithCircle
          {...rest}
          enableAnimation
          containerProps={panHandlers}
          containerStyle={transformStyle}
        />
      )}
    </Translate2D>
  )
}
