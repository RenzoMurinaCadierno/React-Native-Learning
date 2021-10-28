import React, { useState, useCallback, useRef } from "react"
import { Animated, PanResponder } from "react-native"
import { interpolate } from "@app-utils/functions"
import useSetAnimatedValue from "@app-hooks/useSetAnimatedValue"
import useLayout from "@app-hooks/useLayout"

export default function Translate2D({
  axis, // 'x', 'y'
  style,
  children,
  ranges,
  onTouchMove,
  translateOutputRange,
  ...rest
}) {
  // const [panOffset, setPanOffset] = useState(0)
  // const [layout, onLayoutChange] = useLayout()
  // const animVal = useSetAnimatedValue(panOffset)

  // const setOffset = useCallback(
  //   (e) => {

  //   },
  //   [layout]
  // )

  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        // pan.setOffset(pan.__getValue())
        // pan.setValue({ x: 0, y: 0 })
        let x = pan.x._value < 0 ? 0 : pan.x._value

        pan.setOffset({ x, y: 0 })
        pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false
        // listener: (e, g) => console.log(g)
      }),
      onPanResponderRelease: (_, { vx, vy }) => {
        pan.flattenOffset()
        Animated.decay(pan, {
          velocity: { x: vx, y: vy },
          useNativeDriver: true
          // }).start(pan._resetState)
        }).start()
      }
    })
  ).current

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        style,
        // pan.getLayout()
        {
          transform: [
            // {
            //   ["translate" + axis.toUpperCase()]: interpolate(
            //     val,
            //     translateOutputRange
            //   )
            // },
            // { ["translate" + axis.toUpperCase()]: pan.x }
            {
              ["translate" + axis.toUpperCase()]: pan.x.interpolate({
                inputRange: [0, ranges.x],
                outputRange: [0, ranges.x - 72],
                extrapolate: "clamp"
              })
              uselayout instead of 72. make it work for axis x and y
            }
          ]
        }
      ]}
      // onLayout={onLayoutChange}
      // onTouchMove={setOffset}
      {...rest}
    >
      {children}
    </Animated.View>
  )
}

Translate2D.defaultProps = {
  axis: "x",
  axisOffset: 0,
  translateOutputRange: [-100, 100]
}
