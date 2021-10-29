import { useRef } from "react"
import { Animated, PanResponder } from "react-native"
import useLayout from "@app-hooks/useLayout"

export default function Translate2D({ axis, ranges, children }) {
  const [childLayout, onChildLayout] = useLayout()
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      // onPanResponderGrant: (e, gestureState) => {
      onPanResponderGrant: () => {
        pan.setOffset(pan.__getValue())
        pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([null, _getMoveDistance(axis, pan)], {
        useNativeDriver: false
      }),
      onPanResponderRelease: (_, { vx, vy }) => {
        pan.flattenOffset()
        Animated.decay(pan, {
          velocity: { x: vx, y: vy },
          deceleration: 0.99,
          useNativeDriver: true
        }).start()
      }
    })
  ).current
  pass values to children. Start with contacts screen division
  return children({
    transformStyle: _getTransformStyle(axis, ranges, pan, childLayout),
    panHandlers: { ...panResponder.panHandlers, onLayout: onChildLayout }
  })
}

function _getValidAxis(axis) {
  if (typeof axis !== "string") return null

  const axisLower = axis.toLowerCase()

  return axisLower === "x" || axisLower === "y" ? axisLower : null
}

function _getMoveDistance(axis, pan) {
  const _axis = _getValidAxis(axis)

  return _axis ? { ["d" + _axis]: pan[_axis] } : { dx: pan.x, dy: pan.y }
}

function _getTransformStyle(axis, ranges, pan, childLayout) {
  const _axis = _getValidAxis(axis)

  if (!_axis) {
    return {
      transform: [
        { translateX: _getInterpolation(pan, "x", ranges, childLayout) },
        { translateY: _getInterpolation(pan, "y", ranges, childLayout) }
      ]
    }
  }

  return {
    transform: [
      {
        ["translate" + _axis.toUpperCase()]: _getInterpolation(
          pan,
          _axis,
          ranges,
          childLayout
        )
      }
    ]
  }
}

function _getInterpolation(pan, axis, ranges, childLayout) {
  const targetChildDimension = axis === "x" ? "width" : "height"

  return pan[axis].interpolate({
    inputRange: [0, ranges[axis]],
    outputRange: [0, ranges[axis] - childLayout[targetChildDimension]],
    extrapolate: "clamp"
  })
}
