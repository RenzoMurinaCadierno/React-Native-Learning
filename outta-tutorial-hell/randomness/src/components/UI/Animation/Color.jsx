import { interpolate } from "@app-utils/functions"
import { useLinearAnimatedValue } from "@app-hooks"
import { animations } from "@app-constants"

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
    activeAnimation,
    inactiveAnimation
  })

  return children(interpolate(color, [inactiveColor, activeColor]))
}

Color.defaultProps = {
  activeAnimation: animations.effects.color.IN,
  inactiveAnimation: animations.effects.color.OUT
}
