import { useEffect, useState } from "react"
import useLinearAnimatedValue from "./useLinearAnimatedValue"

// isMounted flags when the target animated component can render. use it as a
// conditional renderer: isMounted && <AnimatedComponentWithAnimatedValue />
// I worked on this hook but didn't end up using it. Maybe in the future
export default function useRenderControlledAnimatedValue({
  active,
  activeAnimation,
  inactiveAnimation,
  onActiveFinish,
  onInactiveFinish,
  unmountOnActiveFinish,
  ...rest
}) {
  const [isAnimating, setIsAnimating] = useState(active)
  const [isMounted, setIsMounted] = useState(isAnimating)

  const animatedValue = useLinearAnimatedValue({
    active: isAnimating,
    activeAnimation,
    inactiveAnimation,
    onActiveStart: () => setIsMounted(true),
    onActiveFinish: () => {
      if (Boolean(unmountOnActiveFinish) || !Boolean(inactiveAnimation)) {
        setIsMounted(false)
      }
      onActiveFinish?.()
    },
    onInactiveFinish: () => {
      setIsMounted(false)
      onInactiveFinish?.()
    },
    ...rest
  })

  useEffect(() => {
    setIsAnimating(active)
  }, [active])

  return [animatedValue, isMounted]
}
