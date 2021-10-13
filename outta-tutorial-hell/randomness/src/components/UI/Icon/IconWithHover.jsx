import React from "react"
import IconWithColorTransition from "./IconWithColorTransition"
import Hover from "../Animation/Hover"

export default function IconWithHover({ active, style, ...rest }) {
  return (
    <Hover active={active}>
      <IconWithColorTransition {...rest} active={active} />
    </Hover>
  )
}

// import React, { useEffect, useRef, useState } from "react"
// import { Animated } from "react-native"
// import IconWithColorTransition from "./IconWithColorTransition"
// // import { getTimingConfig, interpolate } from "./utils"
// import { interpolate } from "@app-utils/functions"
// import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
// import animations from "@app-constants/animations"

// export default function IconWithHover({ active, style, ...rest }) {
//   const val = useLoopingAnimatedValue({
//     active,
//     activeSequence: animations.icons.hover.ACTIVE_SEQUENCE,
//     inactiveAnimation: animations.icons.hover.OUT
//   })

//   return (
//     <Animated.View
//       style={[
//         style,
//         {
//           transform: [
//             { translateY: interpolate(val, [0, -10]) },
//             {
//               rotateY: interpolate(val, ["0deg", "180deg"])
//             },
//             { scale: interpolate(val, [1, 1.15]) }
//           ]
//         }
//       ]}
//     >
//       <IconWithColorTransition {...rest} active={active} />
//     </Animated.View>
//   )
// }
