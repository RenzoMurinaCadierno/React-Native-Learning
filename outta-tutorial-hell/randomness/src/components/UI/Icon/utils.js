import { Easing } from "react-native"

export const getTimingConfig = (
  toValue,
  duration,
  ease = "inOut",
  delay = 0,
  useNativeDriver = true
) => ({
  toValue,
  duration,
  easing: Easing[ease](Easing.ease),
  delay,
  useNativeDriver
})

export function interpolate(variable, inputRange, outputRange) {
  return variable.interpolate({ inputRange, outputRange })
}
