import React from "react"
import { StyleSheet, View } from "react-native"
import Layout from "../../layout"
import UI from "../../UI"
import IconList from "./IconList"
import colors from "../../../constants/colors"

export default function Section({
  containerStyle,
  overlayStyle,
  titleStyle,
  iconStyle,
  iconContainerStyle,
  iconColor,
  names,
  title,
  textSize,
  iconSize
}) {
  return (
    <View style={[containerStyle, _styles.container]}>
      <Layout.Overlay style={overlayStyle}>
        <UI.Text
          color={colors.SECONDARY}
          family="bold"
          size={textSize}
          style={titleStyle}
        >
          {title}
        </UI.Text>
      </Layout.Overlay>
      <IconList
        {...{ names, iconColor, iconStyle, iconSize, iconContainerStyle }}
      />
    </View>
  )
}

const _styles = StyleSheet.create({ container: { flex: 1, width: "100%" } })
