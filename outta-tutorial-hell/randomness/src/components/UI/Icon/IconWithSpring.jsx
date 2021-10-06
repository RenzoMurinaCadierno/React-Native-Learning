import React from "react"
import IconWithColorTransition from "./IconWithColorTransition"
import Spring from "../Animation/Spring"

export default function IconWithSpring({ active, ...rest }) {
  return (
    <Spring active={active}>
      <IconWithColorTransition {...rest} active={active} />
    </Spring>
  )
}
