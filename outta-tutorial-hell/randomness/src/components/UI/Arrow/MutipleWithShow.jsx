import React, { useState } from "react"
import { Animated, StyleSheet } from "react-native"
import MultipleWithPulsation from "./MultipleWithPulsation"
import { useLinearAnimatedValue } from "@app-hooks"
import { colors, animations } from "@app-constants"
import { interpolate } from "@app-utils/functions"

function MultipleWithShow({
  show,
  activeAnimation,
  inactiveAnimation,
  containerStyle,
  containerProps,
  ...rest
}) {
  const [mount, setMount] = useState(show)

  const animatedValue = useLinearAnimatedValue({
    active: show,
    activeAnimation,
    inactiveAnimation,
    onActiveStart: () => setMount(true),
    onInactiveFinish: () => setMount(false)
  })

  return (
    mount && (
      <Animated.View
        style={[
          _styles.container,
          {
            opacity: animatedValue,
            transform: [{ scale: interpolate(animatedValue, [1.2, 1]) }]
          },
          containerStyle
        ]}
        {...containerProps}
      >
        <MultipleWithPulsation
          show={mount}
          color={colors.accent.PRIMARY}
          {...rest}
        />
      </Animated.View>
    )
  )
}

MultipleWithShow.defaultProps = {
  activeAnimation: animations.arrows.swipe.IN,
  inactiveAnimation: animations.arrows.swipe.OUT,
  containerProps: {}
}

export default React.memo(MultipleWithShow)

const _styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "2%",
    right: "1%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background.DARK_ALPHA(0.3),
    paddingHorizontal: "1%",
    paddingVertical: "1%",
    borderRadius: 10
  }
})
