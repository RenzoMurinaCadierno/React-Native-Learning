import React from "react"
import colors from "@app-constants/colors"
import Base from "./Base"
import Color from "../Animation/Color"

export default function IconWithColorTransition({
  active,
  activeColor,
  inactiveColor,
  Component,
  colorProps,
  ...rest
}) {
  return (
    <Color {...{ active, inactiveColor, activeColor, ...colorProps }}>
      {(animatedColor) => <Component {...rest} color={animatedColor} />}
    </Color>
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.main.PRIMARY,
  inactiveColor: colors.main.SECONDARY,
  Component: (props) => <Base animated {...props} />,
  colorProps: {}
}
