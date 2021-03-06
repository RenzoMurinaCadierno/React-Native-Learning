import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const texts = {
  shrink: {
    wrapper: {
      IN: (val) =>
        Animated.timing(
          val,
          animationConfigs.timing(1, 250, easings.IN, 0, false)
        ),
      OUT: (val) =>
        Animated.timing(
          val,
          animationConfigs.timing(0, 250, easings.OUT, 0, false)
        )
    },
    text: {
      IN: (val) =>
        Animated.timing(val, animationConfigs.timing(1, 250, easings.IN)),
      OUT: (val) =>
        Animated.timing(val, animationConfigs.timing(0, 250, easings.OUT))
    }
  },
  translate: {
    IN: (value) =>
      Animated.timing(value, animationConfigs.timing(1, 350, easings.IN)),
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 350, easings.OUT))
  },
  marquee: {
    ACTIVE_SEQUENCE: (val) => [
      Animated.timing(val, animationConfigs.timing(0.3, 500, easings.IN)),
      Animated.timing(val, animationConfigs.timing(0.7, 1250, easings.LINEAR)),
      Animated.timing(val, animationConfigs.timing(1, 500, easings.OUT)),
      Animated.timing(val, animationConfigs.timing(0, 0, easings.LINEAR))
    ]
  }
}

export default texts
