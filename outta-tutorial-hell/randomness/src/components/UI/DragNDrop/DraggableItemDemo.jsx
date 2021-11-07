import React, { useRef, useState } from "react"
import { Animated, StyleSheet } from "react-native"
import IconWithCircle from "../Icon/IconWithCircle"
import IconBase from "../Icon/Base"
import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
import colors from "@app-constants/colors"
import animations from "@app-constants/animations"
import { interpolate } from "@app-utils/functions"

export default function DraggableItemDemo({
  active,
  anchor,
  offsets,
  size,
  containerStyle,
  ...rest
}) {
  const [show, setShow] = useState(active)
  const animVal = useLoopingAnimatedValue({
    active,
    activeSequence: animations.icons.dragNDrop.example.ACTIVE_SEQUENCE,
    inactiveAnimation: animations.icons.dragNDrop.example.OUT,
    onInactiveAnimationFinish: () => setShow(false)
  })
  const anchorY = useRef(new Animated.Value(-1 * offsets.y)).current

  const displacementStyle = {
    opacity: interpolate(animVal, [0.75, 0]),
    transform: [
      { translateY: Animated.add(anchorY, interpolate(animVal, [0, -100])) },
      { translateX: -1 * offsets.x + 2 }
    ]
  }

  return (
    show && (
      <>
        <IconWithCircle
          {...rest}
          size={size}
          containerStyle={{
            ..._styles.container,
            ...displacementStyle,
            ...containerStyle
          }}
          color={colors.main.PRIMARY}
          borderColor={colors.main.PRIMARY}
          backgroundColor={colors.accent.PRIMARY_ALPHA(0.5)}
          enableAnimation
        />
        <IconBase
          animated
          size={size}
          name="cursor-pointer"
          vector="MaterialCommunityIcons"
          color={colors.main.SECONDARY}
          style={[_styles.cursor, displacementStyle]}
        />
      </>
    )
  )
}

DraggableItemDemo.defaultProps = { containerStyle: {} }

const _styles = StyleSheet.create({
  container: { position: "absolute", right: 0, bottom: 0 },
  cursor: { position: "absolute", right: -5, bottom: -5 }
})
