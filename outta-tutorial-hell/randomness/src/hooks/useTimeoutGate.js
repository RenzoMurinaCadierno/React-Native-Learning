import { useEffect, useState, useRef } from "react"

export default function useTimeoutGate(delay = 0, { onReady, abortOn } = {}) {
  const [ready, setReady] = useState(false)
  const readyTimeoutId = useRef(null)

  useEffect(() => {
    readyTimeoutId.current = setTimeout(() => {
      setReady(true)
      onReady?.()
    }, delay)

    return () => clearTimeout(readyTimeoutId.current)
  }, [])

  useEffect(() => {
    if (abortOn && !ready) clearTimeout(readyTimeoutId.current)
  }, [abortOn])

  return ready
}
