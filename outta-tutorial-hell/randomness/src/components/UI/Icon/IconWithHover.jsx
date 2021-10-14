import React from "react"
import IconWithColorTransition from "./IconWithColorTransition"
import Hover from "../Animation/Hover"

export default function IconWithHover({ active, style, hoverProps, ...rest }) {
  return (
    <Hover active={active} {...hoverProps}>
      <IconWithColorTransition {...rest} active={active} />
    </Hover>
  )
}

IconWithHover.defaultProps = { hoverProps: {} }
