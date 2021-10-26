import { useState, useCallback } from "react"

export default function useLayout(onLayoutCallback) {
  const [layoutSt, setLayoutSt] = useState({ width: 0, height: 0, x: 0, y: 0 })

  const onLayoutChange = useCallback(
    (e) => {
      setLayoutSt(e.nativeEvent.layout)
      onLayoutCallback?.(e.nativeEvent.layout)
    },
    [onLayoutCallback]
  )

  return [layoutSt, onLayoutChange]
}
