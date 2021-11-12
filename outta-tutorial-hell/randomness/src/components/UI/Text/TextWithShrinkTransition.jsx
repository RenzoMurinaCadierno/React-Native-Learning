import React from "react"
import { Animated } from "react-native"
import Base from "./Base"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import animations from "@app-constants/animations"
import { interpolate } from "@app-utils/functions"

export default function TextWithShrinkTransitionWrapper({
  active,
  size,
  ...rest
}) {
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.texts.shrink.wrapper.IN,
    inactiveAnimation: animations.texts.shrink.wrapper.OUT
  })

  return (
    <Animated.View
      style={{ height: interpolate(animatedValue, [size * 3, 0]) }}
    >
      <TextWithShrinkTransitionTextComponent
        active={active}
        size={size}
        {...rest}
      />
    </Animated.View>
  )
}

function TextWithShrinkTransitionTextComponent({
  active,
  size,
  style,
  children,
  ...rest
}) {
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.texts.shrink.text.IN,
    inactiveAnimation: animations.texts.shrink.text.OUT
  })

  return (
    <Base
      animated
      style={[
        {
          opacity: interpolate(animatedValue, [1, 0]),
          transform: [{ scaleY: interpolate(animatedValue, [1, 0]) }]
        },
        style
      ]}
      size={size}
      {...rest}
    >
      {children}
    </Base>
  )
}

// import React from "react"
// import Base from "./Base"
// import useSetAnimatedValue from "@app-hooks/useSetAnimatedValue"
// import { interpolate } from "@app-utils/functions"

// export default function TextWithShrinkTransition({
//   value,
//   style,
//   size,
//   children,
//   ...rest
// }) {
//   const val = useSetAnimatedValue(value)

//   return (
//     <Base
//       animated
//       style={[
//         {
//           opacity: interpolate(val, [1, 0], "clamp"),
//           height: interpolate(val, [size * 3, 0], "clamp"),
//           transform: [{ scaleY: interpolate(val, [1, 0], "clamp") }]
//         },
//         style
//       ]}
//       size={size}
//       {...rest}
//     >
//       {children}
//     </Base>
//   )
// }

// TextWithShrinkTransition.defaultProps = { size: 18 }
