import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import IconWithColorTransition from "./IconWithColorTransition"
import { getAnimatedConfigs } from "./utils"

export default function IconWithHover({ active, style, ...rest }) {
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated.loop(
        Animated.sequence([
          Animated.delay(100),
          Animated.timing(val, getAnimatedConfigs(1, 1000, "out")),
          Animated.delay(100),
          Animated.timing(val, getAnimatedConfigs(0, 1000, "in"))
        ])
      ).start()
    } else {
      Animated.timing(val, getAnimatedConfigs(0, 500, "in")).start()
    }
  }, [active])

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            {
              translateY: val.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -10]
              })
            },
            {
              rotateY: val.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["0deg", "90deg", "0deg"]
              })
            }
          ]
        }
      ]}
    >
      <IconWithColorTransition {...rest} active={active} />
    </Animated.View>
  )
}
