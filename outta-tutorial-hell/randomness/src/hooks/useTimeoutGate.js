import { useEffect, useState } from "react"

export default function useTimeoutGate(delay = 0, onReady) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const readyTimeoutId = setTimeout(() => {
      setReady(true)
      onReady?.()
    }, delay)

    return () => clearTimeout(readyTimeoutId)
  }, [])

  return ready
}
