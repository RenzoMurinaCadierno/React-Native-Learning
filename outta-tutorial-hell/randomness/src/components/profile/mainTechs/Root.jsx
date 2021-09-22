import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import IconList from "./IconList"
import SectionHeader from "../shared/SectionHeader"

export default function Root({
  containerStyle,
  overlayStyle,
  titleStyle,
  iconStyle,
  iconContainerStyle,
  iconColor,
  icons,
  activeIconId,
  title,
  titleSize,
  iconSize,
  onIconPress
}) {
  return (
    <View style={[containerStyle, _styles.container]}>
      <SectionHeader
        title={title}
        titleSize={titleSize}
        titleProps={{ style: titleStyle }}
        overlayProps={{ style: overlayStyle }}
      />
      <IconList
        {...{
          icons,
          iconColor,
          iconStyle,
          iconSize,
          iconContainerStyle,
          activeIconId,
          onIconPress
        }}
      />
    </View>
  )
}

const _styles = StyleSheet.create({ container: { flex: 1 } })
