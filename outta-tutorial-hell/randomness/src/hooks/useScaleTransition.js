import useLinearAnimatedValue from "./useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"

export default function useScaleTransition({
  inactiveScaleValue = 0,
  activeScaleValue = 1,
  ...useLinearAnimatedValueArgs
}) {
  const val = useLinearAnimatedValue(useLinearAnimatedValueArgs)

  return {
    opacity: val,
    transform: [
      { scale: interpolate(val, [inactiveScaleValue, activeScaleValue]) }
    ]
  }
}
