import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import IconWithColorTransition from "./IconWithColorTransition"
import { getTimingConfig, interpolate } from "./utils"

export default function IconWithHover({ active, style, startDelay, ...rest }) {
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated.delay(startDelay)
      Animated.loop(
        Animated.sequence([
          Animated.timing(val, getTimingConfig(1, 1000, "out")),
          Animated.timing(val, getTimingConfig(0, 1000, "in"))
        ])
      ).start()
    } else {
      Animated.timing(val, getTimingConfig(0, 500, "in")).start()
    }
  }, [active])

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: interpolate(val, [0, 1], [0, -10]) },
            {
              rotateY: interpolate(val, [0, 0.5, 1], ["0deg", "90deg", "0deg"])
            },
            { scale: interpolate(val, [0, 1], [1, 1.15]) }
          ]
        }
      ]}
    >
      <IconWithColorTransition {...rest} active={active} />
    </Animated.View>
  )
}

IconWithHover.defaultProps = { startDelay: 0 }
