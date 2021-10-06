import React from "react"
import { Animated } from "react-native"
import useAnimationLogic from "@app-hooks/useAnimationLogic"

export default function Spring({ active, style, children, ...rest }) {
  const val = useAnimationLogic({ active })

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: _interpolate(val, [0, -5]) },
            { scale: _interpolate(val, [1, 1.2]) }
          ]
        }
      ]}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}

function _interpolate(val, outputRange) {
  return val.interpolate({ inputRange: [0, 1], outputRange })
}

// import React, { useEffect, useRef, useState } from "react"
// import { Animated } from "react-native"

// export default function Spring({ active, style, children, ...rest }) {
//   const [isAnimationActive, setIsAnimationActive] = useState(false)
//   const val = useRef(new Animated.Value(0)).current

//   useEffect(() => {
//     if (active) {
//       Animated.spring(val, _getSpringConfig(1.3)).start()
//       setIsAnimationActive(true)
//     } else if (isAnimationActive) {
//       Animated.timing(val, _getSpringConfig(1)).start(() =>
//         setIsAnimationActive(false)
//       )
//     }
//   }, [active])

//   return (
//     <Animated.View
//       style={[
//         style,
//         {
//           transform: [
//             { translateY: _interpolate(val, [0, 1], [0, -50]) },
//             { scale: _interpolate(val, [0, 1.3]) }
//           ]
//         }
//       ]}
//       {...rest}
//     >
//       {children}
//     </Animated.View>
//   )
// }

// function _getSpringConfig(toValue) {
//   return { toValue, duration: 500, friction: 50, tesion: 200 }
// }

// function _interpolate(val, outputRange) {
//   return val.interpolate({ inputRange: [0, 1], outputRange })
// }
