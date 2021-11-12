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
  }
}

export default texts
