import React from "react"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import IconList from "./IconList"
import SectionHeader from "../shared/SectionHeader"
import { screenBodyData } from "@app-store/data/profile"

export default function Sections({
  containerStyle,
  overlayStyle,
  iconStyle,
  iconContainerStyle,
  iconColor,
  activeIconId,
  fontScale,
  onIconPress
}) {
  const iconCategories = useSelector((state) => state.profile.iconCategories)
  // const iconCategories = screenBodyData

  return iconCategories.map((category) => (
    <View key={category.id} style={[containerStyle, _styles.container]}>
      <SectionHeader
        title={category.title}
        titleSize={fontScale * 2.3}
        titleProps={{
          style: {
            letterSpacing: fontScale / 10,
            paddingHorizontal: fontScale
          }
        }}
        overlayProps={{ style: overlayStyle }}
      />
      <IconList
        icons={category.icons}
        iconSize={fontScale * 4}
        {...{
          iconColor,
          iconStyle,
          iconContainerStyle,
          activeIconId,
          onIconPress
        }}
      />
    </View>
  ))
}

Sections.defaultProps = { fontScale: 12 }

const _styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: "3%" }
})
