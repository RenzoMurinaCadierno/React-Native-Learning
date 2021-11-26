import { useState, useEffect } from "react"

export default function useTimeoutToggle(
  trigger,
  {
    timeout = 3000,
    manualCloseOn,
    refreshTimeoutOn,
    onTimeoutStart,
    onTimeoutEnd,
    onManualClose
  } = {}
) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let activeTimeoutId = null

    if (Boolean(trigger)) {
      setActive(true)
      onTimeoutStart?.()

      activeTimeoutId = setTimeout(() => {
        setActive(false)
        onTimeoutEnd?.()
      }, timeout)
    }

    if (Boolean(manualCloseOn)) {
      clearTimeout(activeTimeoutId)
      setActive(false)
      onManualClose?.()
    }

    return () => clearTimeout(activeTimeoutId)
  }, [trigger, refreshTimeoutOn, manualCloseOn])

  return active
}
