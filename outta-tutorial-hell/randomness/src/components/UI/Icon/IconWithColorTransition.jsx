import React from "react"
import colors from "@app-constants/colors"
import Enhanced from "@app-components/enhanced"
import Color from "../Animation/Color"
import animations from "@app-constants/animations"

export default function IconWithColorTransition({
  active,
  activeColor,
  inactiveColor,
  ...rest
}) {
  return (
    <Color
      {...{ active, inactiveColor, activeColor }}
      inactiveAnimation={animations.icons.color.OUT}
    >
      {(animatedColor) => (
        <Enhanced.Animated.BaseIcon {...rest} color={animatedColor} />
      )}
    </Color>
  )
}

IconWithColorTransition.defaultProps = {
  activeColor: colors.main.PRIMARY,
  inactiveColor: colors.main.SECONDARY
}

// import React from "react"
// import colors from "@app-constants/colors"
// import animations from "@app-constants/animations"
// import Enhanced from "@app-components/enhanced"
// import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
// import { interpolate } from "@app-utils/functions"

// export default function IconWithColorTransition({
//   active,
//   activeColor,
//   inactiveColor,
//   ...rest
// }) {
//   const color = useLinearAnimatedValue({
//     active,
//     activeAnimation: animations.icons.color.IN,
//     inactiveAnimation: animations.icons.color.OUT
//   })

//   return (
//     <Enhanced.Animated.BaseIcon
//       {...rest}
//       color={interpolate(color, [inactiveColor, activeColor])}
//     />
//   )
// }

// IconWithColorTransition.defaultProps = {
//   activeColor: colors.main.PRIMARY,
//   inactiveColor: colors.main.SECONDARY
// }
