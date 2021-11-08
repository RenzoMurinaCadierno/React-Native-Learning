import React from "react"
import { Text, StyleSheet, Animated } from "react-native"
import colors from "@app-constants/colors"

export default function Body({
  animatedValue,
  viewPort,
  fontScale,
  style,
  ...rest
}) {
  const { vw, vh } = viewPort

  return (
    <Animated.View
      style={[
        _styles.container,
        { bottom: vh(7), padding: vw(2), opacity: animatedValue },
        style
      ]}
      {...rest}
    >
      <Text style={{ fontSize: fontScale }}>asd</Text>
    </Animated.View>
  )
}

Body.defaultProps = { fontScale: 16 }

const _styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1
  }
})

function _getStyles(type, vw, vh, opacity) {
  go on...
}