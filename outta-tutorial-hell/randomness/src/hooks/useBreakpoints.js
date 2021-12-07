import { Dimensions } from "react-native"

const _bpKeys = { SM: "sm", MD: "md", LG: "lg", ANY: "any" }
const _breakpoints = new Map()
const _windowHeight = Dimensions.get("window").height

_breakpoints.set(_bpKeys.SM, _windowHeight <= 575)
_breakpoints.set(_bpKeys.MD, _windowHeight > 575 && _windowHeight < 650)
_breakpoints.set(_bpKeys.LG, _windowHeight >= 650)

export default function useBreakpoints() {
  const get = (bpKey) => {
    if (Object.values(_bpKeys).includes(bpKey)) return _breakpoints.get(bpKey)

    return _getCurrentBpKey()
  }

  const select = (bpKeysAndOptionsObj = {}) =>
    bpKeysAndOptionsObj[_getCurrentBpKey()] || bpKeysAndOptionsObj.any

  return { get, select }
}

function _getCurrentBpKey() {
  const bpIterator = _breakpoints.entries()

  while (true) {
    const currentBpEntry = bpIterator.next().value

    if (currentBpEntry === undefined) return _bpKeys.ANY

    const [currentBpKey, currentBpValue] = currentBpEntry

    if (currentBpValue) return currentBpKey
  }
}
