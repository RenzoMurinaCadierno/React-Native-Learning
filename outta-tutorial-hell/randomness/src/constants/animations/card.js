import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const card = {
  actionIcon: {
    scale: {
      IN: (value) =>
        Animated.spring(value, animationConfigs.springBounce(1, 350)),
      OUT: (value) =>
        Animated.spring(value, animationConfigs.springBounce(0, 350))
    },
    color: {
      IN: (value) =>
        Animated.timing(
          value,
          animationConfigs.timing(1, 350, easings.IN, 0, false)
        ),
      OUT: (value) =>
        Animated.timing(
          value,
          animationConfigs.timing(0, 350, easings.OUT, 0, false)
        )
    }
  },
  transition: {
    IN: (value, delay) =>
      Animated.timing(
        value,
        animationConfigs.timing(1, 200, easings.IN, delay)
      ),
    OUT: (value, delay) =>
      Animated.timing(
        value,
        animationConfigs.timing(1, 200, easings.OUT, delay)
      )
  }
}

export default card
