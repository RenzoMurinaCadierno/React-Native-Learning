import React from "react"
import { Animated } from "react-native"
import Base from "./Base"
import { useLinearAnimatedValue } from "@app-hooks"
import { animations } from "@app-constants"
import { interpolate } from "@app-utils/functions"

export default function TextWithShrinkTransitionWrapper({
  active,
  size,
  ...rest
}) {
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.texts.shrink.wrapper.IN,
    inactiveAnimation: animations.texts.shrink.wrapper.OUT
  })

  return (
    <Animated.View
      style={{ height: interpolate(animatedValue, [size * 3, 0]) }}
    >
      <TextWithShrinkTransitionTextComponent
        active={active}
        size={size}
        {...rest}
      />
    </Animated.View>
  )
}

function TextWithShrinkTransitionTextComponent({
  active,
  size,
  style,
  children,
  ...rest
}) {
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.texts.shrink.text.IN,
    inactiveAnimation: animations.texts.shrink.text.OUT
  })

  return (
    <Base
      animated
      style={[
        {
          opacity: interpolate(animatedValue, [1, 0]),
          transform: [{ scaleY: interpolate(animatedValue, [1, 0]) }]
        },
        style
      ]}
      size={size}
      {...rest}
    >
      {children}
    </Base>
  )
}
