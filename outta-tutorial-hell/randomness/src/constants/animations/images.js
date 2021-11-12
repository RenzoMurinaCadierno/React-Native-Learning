import { Animated } from "react-native"
import { animationConfigs } from "@app-utils/functions"
import easings from "./easings"

const images = {
  opacity: {
    IN: (value) =>
      Animated.timing(value, animationConfigs.timing(1, 2000, easings.LINEAR)),
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 2000, easings.LINEAR))
  }
}

export default images
