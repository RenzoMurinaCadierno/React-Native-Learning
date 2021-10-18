import { Animated, Easing } from "react-native"
import { getTimingConfig, getSpringConfig } from "@app-utils/functions"

const easings = {
  IN: Easing.in(Easing.ease),
  OUT: Easing.out(Easing.ease),
  IN_OUT: Easing.inOut(Easing.ease),
  LINEAR: Easing.linear
}

const effects = {
  default: {
    IN: (value) => Animated.timing(value, getTimingConfig(1, 350, easings.IN)),
    OUT: (value) => Animated.timing(value, getTimingConfig(0, 350, easings.OUT))
  },
  spring: {
    IN: (value) => Animated.spring(value, getSpringConfig(1, 1000)),
    OUT: (value) => Animated.spring(value, getSpringConfig(0, 1000))
  },
  hover: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, getTimingConfig(1, 1000, easings.IN)),
      Animated.timing(value, getTimingConfig(0, 1000, easings.OUT))
    ],
    OUT: (value) => Animated.timing(value, getTimingConfig(0, 500, easings.OUT))
  },
  color: {
    IN: (value) =>
      Animated.timing(value, getTimingConfig(1, 1000, easings.IN, 0, false)),
    OUT: (value) =>
      Animated.timing(value, getTimingConfig(0, 1000, easings.OUT, 0, false))
  }
}

const animations = {
  icons: {
    color: {
      IN: (value) =>
        Animated.timing(
          value,
          getTimingConfig(1, 125, easings.LINEAR, 0, false)
        ),
      OUT: (value) =>
        Animated.timing(
          value,
          getTimingConfig(0, 125, easings.LINEAR, 0, false)
        )
    },
    shadow: {
      ACTIVE_SEQUENCE: (value) => [
        Animated.timing(value, getTimingConfig(1, 1000, easings.IN)),
        Animated.timing(value, getTimingConfig(0.6, 1000, easings.OUT))
      ],
      OUT: (value) =>
        Animated.timing(value, getTimingConfig(0.6, 500, easings.OUT))
    },
    aura: {
      ACTIVE_SEQUENCE: (value) => [
        Animated.timing(value, getTimingConfig(1, 2000, easings.LINEAR)),
        Animated.timing(value, getTimingConfig(0, 0, easings.LINEAR))
      ]
    }
  },
  images: {
    opacity: {
      IN: (value) =>
        Animated.timing(value, getTimingConfig(1, 2000, easings.LINEAR)),
      OUT: (value) =>
        Animated.timing(value, getTimingConfig(0, 2000, easings.LINEAR))
    }
  },
  card: {
    actionIcon: {
      scale: {
        IN: (value) => Animated.spring(value, getSpringConfig(1, 350)),
        OUT: (value) => Animated.spring(value, getSpringConfig(0, 350))
      },
      color: {
        IN: (value) =>
          Animated.timing(value, getTimingConfig(1, 350, easings.IN, 0, false)),
        OUT: (value) =>
          Animated.timing(value, getTimingConfig(0, 350, easings.OUT, 0, false))
      }
    }
  },
  effects,
  easings
}

export default animations
