import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "../../UI"

export default function IconList({
  names,
  iconSize,
  containerStyle,
  iconStyle,
  iconColor,
  iconContainerStyle
}) {
  return (
    <View style={[containerStyle, _styles.container]}>
      {names.map((name) => (
        <UI.Icon
          key={name}
          name={name}
          size={iconSize}
          color={iconColor}
          elevate
          {...{ iconStyle, iconContainerStyle }}
        />
      ))}
    </View>
  )
}

IconList.defaultProps = { names: [] }

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  }
})
