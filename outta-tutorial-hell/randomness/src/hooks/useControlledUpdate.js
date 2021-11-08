import { useState, useRef } from "react"

export default function useControlledUpdate(initialState) {
  const tempState = useRef(initialState)
  const [savedState, setSavedState] = useState(null)

  return {
    temp: () => tempState.current,
    update: (value) => (tempState.current = value),
    updateArray: (elem) => (tempState.current = [...tempState.current, elem]),
    updateObject: (obj) =>
      (tempState.current = { ...tempState.current, ...obj }),
    state: () => savedState,
    load: () => {
      tempState.current = savedState
    },
    save: () => setSavedState(tempState.current)
  }
}
