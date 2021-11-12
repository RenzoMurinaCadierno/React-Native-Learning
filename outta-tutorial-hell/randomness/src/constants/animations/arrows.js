import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const arrows = {
  swipe: {
    IN: (value) => Animated.spring(value, animationConfigs.springFriction(1)),
    OUT: (value) => Animated.spring(value, animationConfigs.springFriction(0))
  },
  directional: {
    ACTIVE_SEQUENCE: [
      (val) =>
        Animated.loop(
          Animated.sequence([
            Animated.delay(200),
            Animated.timing(
              val,
              animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
            ),
            Animated.timing(
              val,
              animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
            )
          ])
        ),
      (val) =>
        Animated.loop(
          Animated.sequence([
            Animated.delay(400),
            Animated.timing(
              val,
              animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
            ),
            Animated.timing(
              val,
              animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
            )
          ])
        ),
      (val) =>
        Animated.loop(
          Animated.sequence([
            Animated.delay(600),
            Animated.timing(
              val,
              animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
            ),
            Animated.timing(
              val,
              animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
            )
          ])
        )
    ]
  }
}

export default arrows
