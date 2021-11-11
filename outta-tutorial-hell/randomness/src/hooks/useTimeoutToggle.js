import { useState, useEffect } from "react"

export default function useTimeoutToggle(
  trigger,
  { timeout = 3000, manualCloseOn, refreshTimeoutOn, onShow, onHide } = {}
) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let activeTimeoutId = null

    if (Boolean(trigger)) {
      setActive(true)
      onShow?.()
      activeTimeoutId = setTimeout(() => {
        setActive(false)
        onHide?.()
      }, timeout)
    }

    if (Boolean(manualCloseOn)) {
      clearTimeout(activeTimeoutId)
      setActive(false)
    }

    return () => clearTimeout(activeTimeoutId)
  }, [trigger, refreshTimeoutOn, manualCloseOn])

  return active
}
