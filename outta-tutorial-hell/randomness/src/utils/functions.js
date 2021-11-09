import { Easing } from "react-native"
import appColors from "@app-constants/colors"

export class Obj {
  static isPlain = (value) =>
    value &&
    value instanceof Object &&
    !Array.isArray(value) &&
    typeof value !== "function"

  static isEmpty = (object) => !Boolean(Object.keys(object).length)

  static hasAllProperties = (object, ...propertyNames) => {
    if (!this.isPlain(object)) return false

    for (propName of propertyNames) {
      if (!object.hasOwnProperty(propName)) return false
    }

    return true
  }

  static hasSomeProperties = (object, ...propertyNames) => {
    if (!this.isPlain(object)) return false

    for (propName of propertyNames) {
      if (object.hasOwnProperty(propName)) return true
    }

    return false
  }

  static reverse = (object) => {
    let entries = Object.entries(object)
    entries.reverse()
    return Object.fromEntries(entries)
  }
}

export class Color {
  static getByTypeOrProp = (
    type,
    colorProp,
    variantGroup = "main",
    fallbackVariantType = "PRIMARY"
  ) =>
    appColors[variantGroup][type?.toUpperCase()] ??
    colorProp ??
    appColors[variantGroup][fallbackVariantType]

  static getRgbaByType = (
    type = "PRIMARY",
    { variantGroup = "main", alphaValue = 1 } = {}
  ) =>
    appColors[variantGroup][type?.toUpperCase() + "_ALPHA"]?.(
      Number.isNaN(alphaValue) ? 1 : alphaValue
    )

  static getShadowForType = (type = "PRIMARY", { dark = false } = {}) =>
    Boolean(dark)
      ? appColors.background.DARK
      : appColors.accent[type.toUpperCase()] ?? appColors.accent.PRIMARY

  static castRgbToRgba = (rgbString, alphaValue = 1, warnInConsole) => {
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
}

export function interpolate(value, outputRange) {
  return value.interpolate({ inputRange: [0, 1], outputRange })
}

export function interpolate012(value, outputRange, extrapolate) {
  return value.interpolate({ inputRange: [0, 1, 2], outputRange, extrapolate })
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
