import { Dimensions } from "react-native"

const _getWindowHeight = () => Dimensions.get("window").height
const _currentWindowHeight = _getWindowHeight()
const _breakpoints = new Map()

_breakpoints.set("sm", _currentWindowHeight <= 575)
_breakpoints.set("md", _currentWindowHeight > 575 && _currentWindowHeight < 650)
_breakpoints.set("lg", _currentWindowHeight >= 650)

export default function useBreakpoints() {
  const _getCurrentBpKey = () => {
    const bpIterator = _breakpoints.entries()
    let lastValidBpKey = ""

    while (true) {
      const currentBpEntry = bpIterator.next().value
      if (!Boolean(currentBpEntry)) return lastValidBpKey

      const [currentBpKey, currentBpValue] = currentBpEntry

      if (!currentBpValue) return lastValidBpKey

      lastValidBpKey = currentBpKey
    }
  }

  const get = (bpKey) => {
    if (["sm", "md", "lg"].includes(bpKey)) return _breakpoints.get(bpKey)

    return _getCurrentBpKey()
  }

  const select = (bpKeysAndOptionsObj = {}) => {
    const currentBpKey = _getCurrentBpKey()

    return bpKeysAndOptionsObj[currentBpKey] || bpKeysAndOptionsObj.any
  }

  return { get, select }
}
