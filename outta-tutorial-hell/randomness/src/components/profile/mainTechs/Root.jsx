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
  title,
  titleSize,
  iconSize
}) {
  const [activeIcon, setActiveIcon] = useState("")

  const handleIconPress = (id) => {
    setActiveIcon((prevId) => (prevId === id ? "" : id))
  }

  return (
    <View style={[containerStyle, _styles.container]}>
      <SectionHeader
        title={title}
        titleSize={titleSize}
        titleProps={{ style: titleStyle }}
        overlayProps={{ style: overlayStyle }}
      />
      <IconList
        onIconPress={handleIconPress}
        {...{
          icons,
          iconColor,
          iconStyle,
          iconSize,
          iconContainerStyle,
          activeIcon
        }}
      />
    </View>
  )
}

const _styles = StyleSheet.create({ container: { flex: 1 } })
