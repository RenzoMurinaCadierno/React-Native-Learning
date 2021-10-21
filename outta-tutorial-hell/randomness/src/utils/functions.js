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

export function interpolate012(value, outputRange) {
  return value.interpolate({ inputRange: [0, 1, 2], outputRange })
}

export const animationConfigs = {
  timing: (
    toValue,
    duration,
    easing = Easing.inOut(Easing.ease),
    delay = 0,
    useNativeDriver = true
  ) => ({
    toValue,
    duration,
    easing,
    delay,
    useNativeDriver
  }),
  springBounce: (
    toValue,
    duration,
    speed = 20,
    bounciness = 20,
    useNativeDriver = true
  ) => ({
    toValue,
    duration,
    speed,
    bounciness,
    useNativeDriver
  }),
  springFriction: (
    toValue,
    friction = 400,
    tension = 70,
    useNativeDriver = true
  ) => ({
    toValue,
    friction,
    tension,
    useNativeDriver
  })
}

export const uid = (function () {
  const ids = {}
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  ]

  const getIdString = () => {
    let newId = ""

    while (newId.length <= 10) {
      const rndForChar = Math.random()
      const rndForUpperCase = Math.random()
      const nextChar = chars[Math.floor(rndForChar * chars.length)]

      newId += rndForUpperCase < 0.5 ? nextChar : nextChar.toUpperCase()
    }

    return newId
  }

  const idIsInUse = (newId) => (Boolean(ids[newId]) ? true : false)

  const createId = (optionalNonFalsyValue) => {
    const newId = getIdString()

    if (idIsInUse(newId)) return createId(optionalNonFalsyValue)

    ids[newId] = Boolean(optionalNonFalsyValue) ? optionalNonFalsyValue : newId

    return newId
  }

  return createId
})()
