import { Easing } from "react-native"

export function castRgbToRgba(rgbString, alphaValue = 1, warnInConsole) {
  const isMatch = /rgb\((\d{1,3},\s){2}\d{1,3}\)/g.test(rgbString)
  const isValidAlpha =
    !Number.isNaN(alphaValue) && 0 <= alphaValue && alphaValue <= 1

  if (!isMatch || !isValidAlpha) {
    if (warnInConsole) {
      console.warn("Invalid rgb formatted string or alpha value.")
    }
    return rgbString
  }

  return rgbString
    .replace(/\s/g, "")
    .replace("rgb(", "rgba(")
    .replace(")", "," + alphaValue.toString() + ")")
}

export function interpolate(value, outputRange) {
  return value.interpolate({ inputRange: [0, 1], outputRange })
}

export function getTimingConfig(
  toValue,
  duration,
  easing = Easing.inOut(Easing.ease),
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

export function getSpringConfig(
  toValue,
  duration,
  speed = 20,
  bounciness = 20,
  useNativeDriver = true
) {
  return {
    toValue,
    duration,
    speed,
    bounciness,
    useNativeDriver
  }
}
