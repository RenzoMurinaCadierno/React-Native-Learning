import React, { useRef } from "react"
import { Animated, StyleSheet } from "react-native"
import IconWithCircle from "../Icon/IconWithCircle"
import IconBase from "../Icon/Base"
import Logic from "../../logic"
import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
import colors from "@app-constants/colors"
import animations from "@app-constants/animations"
import { interpolate } from "@app-utils/functions"

export default function DraggableItemDemoGate({ delayBeforeMount, ...rest }) {
  return (
    <Logic.DelayMountPhase delay={delayBeforeMount}>
      <DraggableItemDemoComponent {...rest} />
    </Logic.DelayMountPhase>
  )
}

function DraggableItemDemoComponent({
  active,
  anchor,
  offsets,
  size,
  containerStyle,
  ...rest
}) {
  const animVal = useLoopingAnimatedValue({
    active,
    activeSequence: animations.icons.dragNDrop.example.ACTIVE_SEQUENCE,
    inactiveAnimation: animations.icons.dragNDrop.example.OUT
  })

  const anchorY = useRef(new Animated.Value(-1 * offsets.y + 1)).current

  const animationStyle = {
    opacity: interpolate(animVal, [0.75, 0]),
    transform: [
      { translateY: Animated.add(anchorY, interpolate(animVal, [0, -100])) },
      { translateX: -1 * offsets.x + 2 }
    ]
  }

  return (
    <>
      <IconWithCircle
        {...rest}
        size={size}
        containerStyle={{
          ..._styles.container,
          ...animationStyle,
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
        style={[_styles.cursor, animationStyle]}
      />
    </>
  )
}

DraggableItemDemoComponent.defaultProps = { containerStyle: {} }

const _styles = StyleSheet.create({
  container: { position: "absolute", right: 0, bottom: 0 },
  cursor: { position: "absolute", right: -5, bottom: -5 }
})
