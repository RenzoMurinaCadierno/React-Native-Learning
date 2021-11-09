import { useState, useEffect } from "react"

export default function useTimeoutToggle(
  trigger,
  { timeout = 1000, refreshOn } = {}
) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let activeTimeoutId = null

    if (Boolean(trigger)) {
      setActive(true)
      activeTimeoutId = setTimeout(() => {
        setActive(false)
      }, timeout)
    }

    return () => clearTimeout(activeTimeoutId)
  }, [trigger, refreshOn])

  return active
}
