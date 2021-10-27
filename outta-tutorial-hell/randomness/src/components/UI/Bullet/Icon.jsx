import React from "react"
import IconWithCircle from "../Icon/IconWithCircle"

export default function Icon({ containerStyle, ...rest }) {
  return <IconWithCircle {...rest} />
}

Icon.defaultProps = { size: 40, type: "primary" }
