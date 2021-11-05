import React from "react"
import { Ionicons } from "@expo/vector-icons"
import withCreateAnimationComponent from "@app-hoc/withCreateAnimationComponent"
import colors from "@app-constants/colors"

const AnimatedIonicons = withCreateAnimationComponent(Ionicons)

export default function Base({ size, color, animated, ...rest }) {
  const Component = Boolean(animated) ? AnimatedIonicons : Ionicons

  return <Component size={size} color={color} {...rest} />
}

Base.defaultProps = { color: colors.main.PRIMARY, size: 18 }
