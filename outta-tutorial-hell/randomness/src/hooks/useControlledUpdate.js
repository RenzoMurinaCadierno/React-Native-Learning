import { useState, useRef } from "react"

export default function useControlledUpdate(initialState) {
  const tempState = useRef(initialState)
  const [savedState, setSavedState] = useState(null)

  const temp = {
    get: () => tempState.current,
    update: (value) => (tempState.current = value),
    updateArray: (elem) => (tempState.current = [...tempState.current, elem]),
    updateObject: (obj) =>
      (tempState.current = { ...tempState.current, ...obj })
  }

  const state = {
    get: () => savedState,
    save: () => setSavedState(tempState.current)
  }

  return [temp, state]
}
