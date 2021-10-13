import { Animated, Easing } from "react-native"

const easings = {
  IN: Easing.out(Easing.ease),
  OUT: Easing.in(Easing.ease),
  IN_OUT: Easing.inOut(Easing.ease)
}

const effects = {
  spring: {
    IN: (value) => Animated.spring(value, _getSpringConfig(1)),
    OUT: (value) => Animated.spring(value, _getSpringConfig(0))
  },
  hover: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, _getTimingConfig(1, 1000, easings.IN)),
      Animated.timing(value, _getTimingConfig(0, 1000, easings.OUT))
    ],
    OUT: (value) =>
      Animated.timing(value, _getTimingConfig(0, 500, easings.OUT))
  },
  color: {
    IN: (value) =>
      Animated.timing(value, _getTimingConfig(1, 1000, easings.IN, 0, false)),
    OUT: (value) =>
      Animated.timing(value, _getTimingConfig(0, 1000, easings.OUT, 0, false))
  }
}

const animations = {
  icons: {
    color: {
      ...effects.color,
      OUT: (value) =>
        Animated.timing(value, _getTimingConfig(0, 500, easings.OUT, 0, false))
    },
    hover: effects.hover
  },
  effects,
  easings
}

export default animations

function _getTimingConfig(
  toValue,
  duration,
  easing = easings.IN_OUT,
  delay = 0,
  useNativeDriver = true
) {
  return {
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver
  }
}

function _getSpringConfig(toValue) {
  return {
    toValue,
    duration: 1000,
    speed: 20,
    bounciness: 20,
    useNativeDriver: true
  }
}
