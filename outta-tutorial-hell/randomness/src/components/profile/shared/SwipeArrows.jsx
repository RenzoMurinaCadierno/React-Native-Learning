import React, { useRef, useEffect } from "react"
import { Animated, StyleSheet } from "react-native"
import colors from "@app-constants/colors"
import UI from "@app-components/UI"

export default function SwipeArrows({ show, fontScale, ...rest }) {
  attempted to disconnect on scroll. Try using hook here.
  Then, remaster projectsReducer, then 1/2 2/2
  const val = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (show) Animated.timing(val, _getSpringConfig(1)).start()
    else Animated.timing(val, _getSpringConfig(0)).start()
  }, [show])

  return (
    <Animated.View
      style={[
        _styles.container,
        { opacity: val, transform: [{ scale: _interpolate(val, [1.2, 1]) }] }
      ]}
    >
      <UI.DirectionalArrows
        size={fontScale}
        direction="down"
        color={colors.accent.PRIMARY}
        {...rest}
      />
    </Animated.View>
  )
}

const _styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "2%",
    right: "1%",
    justifyContent: "flex-end",
    backgroundColor: colors.background.DARK_ALPHA(0.3),
    paddingHorizontal: "0.5%",
    paddingTop: "1%",
    paddingBottom: 0,
    borderRadius: 10
  }
})

function _getSpringConfig(toValue) {
  return { toValue, friction: 400, tension: 70, useNativeDriver: true }
}

function _interpolate(val, outputRange) {
  return val.interpolate({ inputRange: [0, 1], outputRange })
}
