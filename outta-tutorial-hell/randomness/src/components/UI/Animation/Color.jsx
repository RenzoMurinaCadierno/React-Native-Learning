import { interpolate } from "@app-utils/functions"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import animations from "@app-constants/animations"

export default function Color({
  active,
  activeColor,
  inactiveColor,
  activeAnimation,
  inactiveAnimation,
  children
}) {
  const color = useLinearAnimatedValue({
    active,
    activeAnimation: activeAnimation || animations.effects.color.IN,
    inactiveAnimation: inactiveAnimation || animations.effects.color.OUT
  })

  return children(interpolate(color, [inactiveColor, activeColor]))
}
