import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@app-components/UI"

export default function IconList({
  icons,
  iconSize,
  containerStyle,
  iconStyle,
  iconColor,
  iconContainerStyle,
  activeIconId,
  onIconPress
}) {
  return (
    <View style={[containerStyle, _styles.container]}>
      {icons.map(({ id, ...rest }) => (
        <UI.Icon
          key={id}
          {...rest}
          size={iconSize}
          color={iconColor}
          elevate
          onPress={() => onIconPress?.(id)}
          active={activeIconId === id}
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
    alignContent: "center",
    paddingVertical: "2.5%"
  }
})
