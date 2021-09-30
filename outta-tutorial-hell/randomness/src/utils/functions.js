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
