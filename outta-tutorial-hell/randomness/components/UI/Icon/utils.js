import { Easing } from "react-native"

export const getAnimatedConfigs = (
  toValue,
  duration,
  ease,
  useNativeDriver = true
) => ({
  toValue,
  duration,
  easing: Easing[ease](Easing.ease),
  useNativeDriver
})
