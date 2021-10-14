import React from "react"
import IconWithColorTransition from "./IconWithColorTransition"
import Spring from "../Animation/Spring"

export default function IconWithSpring({ active, springProps, ...rest }) {
  return (
    <Spring active={active} {...springProps}>
      <IconWithColorTransition {...rest} active={active} />
    </Spring>
  )
}

IconWithSpring.defaultProps = { springProps: {} }
