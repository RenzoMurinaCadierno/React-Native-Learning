import React from "react"
import IconWithColorTransition from "./IconWithColorTransition"
import Scale from "../Animation/Scale"

export default function IconWithScale({ active, scaleProps, ...rest }) {
  return (
    <Scale active={active} {...scaleProps}>
      <IconWithColorTransition {...rest} active={active} />
    </Scale>
  )
}

IconWithScale.defaultProps = { scaleProps: {} }
