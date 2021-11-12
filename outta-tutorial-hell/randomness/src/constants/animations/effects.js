import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const effects = {
  default: {
    IN: (value) =>
      Animated.timing(value, animationConfigs.timing(1, 350, easings.IN)),
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 350, easings.OUT))
  },
  spring: {
    IN: (value) =>
      Animated.spring(value, animationConfigs.springBounce(1, 1000)),
    OUT: (value) =>
      Animated.spring(value, animationConfigs.springBounce(0, 1000))
  },
  hover: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, animationConfigs.timing(1, 1000, easings.IN)),
      Animated.timing(value, animationConfigs.timing(0, 1000, easings.OUT))
    ],
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 500, easings.OUT))
  },
  color: {
    IN: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(1, 1000, easings.IN, 0, false)
      ),
    OUT: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(0, 1000, easings.OUT, 0, false)
      )
  }
}

export default effects
