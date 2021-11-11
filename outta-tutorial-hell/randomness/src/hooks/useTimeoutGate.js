import { useEffect, useState } from "react"

export default function useTimeoutGate(delay = 0, onReady) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const renderTimeoutId = setTimeout(() => {
      setReady(true)
      onReady?.()
    }, delay)

    return () => clearTimeout(renderTimeoutId)
  }, [])

  return ready
}
