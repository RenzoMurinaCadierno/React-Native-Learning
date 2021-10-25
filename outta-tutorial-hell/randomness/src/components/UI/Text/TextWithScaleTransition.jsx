import React from "react"
import Base from "./Base"
import useScaleTransition from "@app-hooks/useScaleTransition"

export default function TextWithScaleTransition({
  show,
  useScaleTransitionArgs,
  style,
  children,
  ...rest
}) {
  const transitionStyle = useScaleTransition({
    active: show,
    ...useScaleTransitionArgs
  })

  return (
    <Base animated style={[transitionStyle, style]} {...rest}>
      {children}
    </Base>
  )
}

TextWithScaleTransition.defaultProps = { useScaleTransitionArgs: {} }
