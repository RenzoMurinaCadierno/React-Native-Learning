import React from "react"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import UI from "@app-components/UI"

export default function SectionListItem({
  icons,
  iconSize,
  containerStyle,
  onIconPress,
  ...rest
}) {
  const activeSubSectionId = useSelector(
    (state) => state.profile.activeSubSectionId
  )

  return (
    <View style={[containerStyle, _styles.container]}>
      {icons.map(({ id, ...otherProps }) => (
        <UI.Icon
          {...otherProps}
          {...rest}
          key={id}
          id={id}
          size={iconSize}
          elevate
          active={activeSubSectionId === id}
          onPress={() => onIconPress(id)}
        />
      ))}
    </View>
  )
}

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
