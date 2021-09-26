import React, { useRef } from "react"
import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"
import IconList from "./IconList"
import SectionHeader from "../shared/SectionHeader"
import { mainTechsData } from "../../../store/data/profile"

export default function Root({
  containerStyle,
  overlayStyle,
  titleStyle,
  iconStyle,
  iconContainerStyle,
  iconColor,
  activeIconId,
  titleSize,
  iconSize,
  onIconPress
}) {
  // const { iconCategories } = useSelector((state) => state.profile)
  const whyReduxNoWorkGeez = useRef([mainTechsData]).current
  // console.log(iconCategories)

  return whyReduxNoWorkGeez.map((category) => (
    <View key={category.id} style={[containerStyle, _styles.container]}>
      <SectionHeader
        title={category.title}
        titleSize={titleSize}
        titleProps={{ style: titleStyle }}
        overlayProps={{ style: overlayStyle }}
      />
      <IconList
        icons={category.icons}
        {...{
          iconColor,
          iconStyle,
          iconSize,
          iconContainerStyle,
          activeIconId,
          onIconPress
        }}
      />
    </View>
  ))
}

const _styles = StyleSheet.create({ container: { flex: 1 } })
