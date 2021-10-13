import { useEffect, useRef } from "react"
import { Animated } from "react-native"

export default function useLinearAnimatedValue({
  active,
  activeAnimation,
  inactiveAnimation
}) {
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) activeAnimation(val).start()
    else if (inactiveAnimation) inactiveAnimation(val).start()
  }, [active])

  return val
}

// import { useEffect, useRef } from "react"
// import { Animated } from "react-native"

// export default function useLinearAnimatedValue({
//   active,
//   activeAnimationType = "spring",
//   inactiveAnimationType = "spring",
//   activeAnimationConfig = _getSpringConfig(1),
//   inActiveAnimationConfig = _getSpringConfig(0)
// }) {
//   const val = useRef(new Animated.Value(0)).current

//   useEffect(() => {
//     if (active) {
//       Animated[activeAnimationType](val, activeAnimationConfig).start()
//     } else if (inactiveAnimationType) {
//       Animated[inactiveAnimationType](val, inActiveAnimationConfig).start()
//     }
//   }, [active])

//   return val
// }

// function _getSpringConfig(toValue) {
//   return {
//     toValue,
//     duration: 1000,
//     speed: 20,
//     bounciness: 20,
//     useNativeDriver: true
//   }
// }
