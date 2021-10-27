import React from "react"
import { StyleSheet, View } from "react-native"
import Icon from "./Icon"

export default function Root({ size, containerStyle, ...rest }) {
  return (
    <View
      style={[
        _styles.container,
        { marginHorizontal: size / 2 },
        containerStyle
      ]}
    >
      <Icon name="checkmark" type="primary" size={size * 1.5} {...rest} />
    </View>
  )
}
work on background. make item draggable to uncover. 
Then spinning animation, or fading animations on orientation to indicate where
to slide o o o
Root.defaultProps = { size: 27 }

const _styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    position: "relative",
    alignSelf: "stretch"
  }
})
