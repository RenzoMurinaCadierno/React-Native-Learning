import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const icons = {
  color: {
    IN: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(1, 125, easings.LINEAR, 0, false)
      ),
    OUT: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(0, 125, easings.LINEAR, 0, false)
      )
  },
  shadow: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, animationConfigs.timing(1, 1000, easings.IN)),
      Animated.timing(value, animationConfigs.timing(0.6, 1000, easings.OUT))
    ],
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0.6, 500, easings.OUT))
  },
  aura: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, animationConfigs.timing(1, 2000, easings.LINEAR)),
      Animated.timing(value, animationConfigs.timing(0, 0, easings.LINEAR))
    ]
  },
  dragNDrop: {
    scale: {
      IN: (value) =>
        Animated.spring(value, animationConfigs.springBounce(1, 125)),
      OUT: (value) =>
        Animated.spring(value, animationConfigs.springBounce(0, 125))
    },
    example: {
      ACTIVE_SEQUENCE: (value) => [
        Animated.delay(500),
        Animated.timing(value, animationConfigs.timing(1, 2000, easings.OUT)),
        Animated.timing(value, animationConfigs.timing(0, 0, easings.LINEAR))
      ],
      OUT: (value) =>
        Animated.timing(value, animationConfigs.timing(1, 1000, easings.OUT))
    }
  }
}

export default icons
