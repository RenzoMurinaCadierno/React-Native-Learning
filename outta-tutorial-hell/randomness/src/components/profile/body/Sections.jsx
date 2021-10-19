import React, { useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import * as profileActions from "@app-store/actions/profile"
import IconList from "./IconList"
import SectionHeader from "../shared/SectionHeader"

export default function Sections({
  containerStyle,
  overlayStyle,
  fontScale,
  iconListProps
}) {
  const iconCategories = useSelector((state) => state.profile.iconCategories)
  const dispatch = useDispatch()

  const changeCategory = useCallback(
    (newId) => dispatch(profileActions.changeActiveSubSection(newId)),
    []
  )

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
        onIconPress={changeCategory}
        {...iconListProps}
      />
    </View>
  ))
}

Sections.defaultProps = { fontScale: 12, iconListProps: {} }

const _styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: "3%" }
})
