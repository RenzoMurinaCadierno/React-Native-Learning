import { useRef } from "react"

export default function useFlag(initialState) {
  const flag = useRef(initialState)

  return {
    get: () => flag.current,
    set: (value) => (flag.current = value),
    is: (testVal) => flag.current === testVal
  }
}
