import { Dimensions } from "react-native"

export default function useBreakpoints() {
  const get = (bpKey) => {
    if (["sm", "md", "lg"].includes(bpKey)) return _breakpoints.get(bpKey)

    return _getCurrentBpKey()
  }

  const select = (bpKeysAndOptionsObj = {}) =>
    bpKeysAndOptionsObj[_getCurrentBpKey()] || bpKeysAndOptionsObj.any

  return { get, select }
}

const _windowHeight = Dimensions.get("window").height
const _breakpoints = new Map()

_breakpoints.set("sm", _windowHeight <= 575)
_breakpoints.set("md", _windowHeight > 575 && _windowHeight < 650)
_breakpoints.set("lg", _windowHeight >= 650)

function _getCurrentBpKey() {
  const bpIterator = _breakpoints.entries()
  let lastValidBpKey = ""

  while (true) {
    const currentBpEntry = bpIterator.next().value

    if (currentBpEntry === undefined) return lastValidBpKey

    const [currentBpKey, currentBpValue] = currentBpEntry

    if (!currentBpValue) return lastValidBpKey

    lastValidBpKey = currentBpKey
  }
}
