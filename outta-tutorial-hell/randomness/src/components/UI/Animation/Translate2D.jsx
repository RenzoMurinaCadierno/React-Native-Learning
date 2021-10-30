import { useRef } from "react"
import { Animated, PanResponder } from "react-native"
import useLayout from "@app-hooks/useLayout"
import { isPlainObject } from "@app-utils/functions"

export default function Translate2D({
  axis, // 'x' fixes movement alognside 'x' axis. Same for 'y'. undefined removes limits.
  ranges, // { x: 200, y: 100 } allows displacement from 0-200 on x and 0-100 on y
  startingAnchor, // { x: 0, y: 0 } is default
  decayOnRelease, // whether or not add Animated.decay effect on release
  onPanResponderMove, // callback for panResponderMove's async listener
  children // must spread 'panHandlers' on child, add 'onChildLayout' to child 'onLayout' and 'transformStyle' to child 'style'
}) {
  const [childLayout, onChildLayout] = useLayout()
  const pan = useRef(
    new Animated.ValueXY(_getStartingAnchor(startingAnchor))
  ).current

  const panResponder = useRef(
    _createPanResponder(pan, axis, decayOnRelease, onPanResponderMove)
  ).current

  return children({
    transformStyle: _getTransformStyle(axis, ranges, pan, childLayout),
    panHandlers: panResponder.panHandlers,
    onChildLayout,
    ready: Boolean(childLayout.width)
  })
}

function _getStartingAnchor(startingAnchor) {
  const anchor = { x: 0, y: 0 }

  if (!isPlainObject(startingAnchor)) return anchor
  if (startingAnchor.x) anchor.x = startingAnchor.x
  if (startingAnchor.y) anchor.y = startingAnchor.y

  return anchor
}

function _createPanResponder(pan, axis, decayOnRelease, onPanResponderMove) {
  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    // onPanResponderGrant: (e, gestureState) => {
    onPanResponderGrant: () => {
      pan.setOffset(pan.__getValue())
      pan.setValue({ x: 0, y: 0 })
    },
    onPanResponderMove: Animated.event([null, _getMoveDistance(axis, pan)], {
      useNativeDriver: false,
      listener: onPanResponderMove
    }),
    onPanResponderRelease: (_, { vx, vy }) => {
      pan.flattenOffset()
      decayOnRelease &&
        Animated.decay(pan, {
          velocity: { x: vx, y: vy },
          deceleration: 0.99,
          useNativeDriver: true
        }).start()
    }
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
  if (!Boolean(childLayout.width)) return { transform: [{ scale: 0 }] }

  const _axis = _getValidAxis(axis)

  if (!_axis) {
    return {
      position: "absolute",
      transform: [
        { translateX: _getTranslationValue(pan, "x", ranges, childLayout) },
        { translateY: _getTranslationValue(pan, "y", ranges, childLayout) }
      ]
    }
  }

  return {
    position: "absolute",
    transform: [
      {
        ["translate" + _axis.toUpperCase()]: _getTranslationValue(
          pan,
          _axis,
          ranges,
          childLayout
        )
      }
    ]
  }
}

function _getTranslationValue(pan, axis, ranges, childLayout) {
  if (isPlainObject(ranges) && ranges.hasOwnProperty(axis)) {
    const targetChildDimension = axis === "x" ? "width" : "height"

    return pan[axis].interpolate({
      inputRange: [0, ranges[axis]],
      outputRange: [0, ranges[axis] - childLayout[targetChildDimension]],
      extrapolate: "clamp"
    })
  }

  return pan[axis]
}
