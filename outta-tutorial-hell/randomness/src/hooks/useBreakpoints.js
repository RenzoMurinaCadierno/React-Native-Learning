import { Dimensions } from "react-native"

const _bpKeys = { SM: "sm", MD: "md", LG: "lg", ANY: "any" }
const _breakpoints = new Map()
const _windowHeight = Dimensions.get("window").height

_breakpoints.set(_bpKeys.SM, _windowHeight <= 575)
_breakpoints.set(_bpKeys.MD, _windowHeight > 575 && _windowHeight < 650)
_breakpoints.set(_bpKeys.LG, _windowHeight >= 650)
_breakpoints.set(_bpKeys.ANY, true) // fallback breakpoint. Keep always true

export default function useBreakpoints() {
  const get = (bpKey) => {
    return Object.values(_bpKeys).includes(bpKey)
      ? _breakpoints.get(bpKey)
      : _getCurrentBpKey()
  }

  const select = (bpKeysAndOptionsObj = {}) =>
    bpKeysAndOptionsObj[_getCurrentBpKey()] ?? bpKeysAndOptionsObj.any

  return { get, select }
}

function _getCurrentBpKey() {
  const bpIterator = _breakpoints.entries()

  while (true) {
    const [currentBpKey, currentBpKeyIsActive] = bpIterator.next().value

    if (currentBpKeyIsActive) return currentBpKey
  }
}
