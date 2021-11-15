import React from "react"
import { StyleSheet, Animated } from "react-native"
import AppText from "../Text/Base"
import Enhanced from "../../enhanced"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import useViewPortContext from "@app-hooks/useViewPortContext"
import animations from "@app-constants/animations"
import { interpolate } from "@app-utils/functions"

export default function ActionText({
  children,
  active,
  activeAnimation,
  inactiveAnimation,
  translateXOutputRange,
  onPress,
  containerStyle,
  containerProps,
  ...rest
}) {
  const { vw } = useViewPortContext()
  const val = useLinearAnimatedValue({
    active,
    activeAnimation,
    inactiveAnimation
  })
  const Wrapper = onPress ? Enhanced.Animated.Pressable : Animated.View

  return (
    <Wrapper
      style={[
        _styles.container,
        {
          opacity: val,
          transform: [{ translateX: interpolate(val, [-vw(50), 0]) }]
        },
        containerStyle
      ]}
      onPress={onPress}
      {...containerProps}
    >
      <AppText size={vw(4.5)} type="semi-bold-italic" {...rest}>
        {children}
      </AppText>
    </Wrapper>
  )
}

ActionText.defaultProps = {
  activeAnimation: animations.card.actionText.appear.IN,
  inactiveAnimation: animations.card.actionText.appear.OUT,
  containerProps: {}
}

const _styles = StyleSheet.create({
  container: { position: "absolute", left: 0 }
})
