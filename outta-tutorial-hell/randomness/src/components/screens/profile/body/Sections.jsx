import React, { useCallback } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import SectionListHeader from "./SectionListHeader"
import SectionListItem from "./SectionListItem"
import SectionListFooter from "./SectionListFooter"
import store from "@app-store"

function Sections({
  fontScale,
  containerStyle,
  containerProps,
  sectionListItemProps,
  sectionListHeaderProps,
  onScrollSectionList
}) {
  const iconCategories = useSelector((state) => state.profile.iconCategories)
  const dispatch = useDispatch()

  const changeCategory = useCallback(
    (newId) => dispatch(store.actions.profile.changeActiveSubSection(newId)),
    []
  )

  const renderItem = ({ item: { icons, title } }) => (
    <View style={[containerStyle, _styles.container]} {...containerProps}>
      <SectionListHeader
        fontScale={fontScale * 2}
        title={title}
        titleProps={{
          style: {
            letterSpacing: fontScale / 10,
            paddingHorizontal: fontScale
          }
        }}
        {...sectionListHeaderProps}
      />
      <SectionListItem
        icons={icons}
        iconSize={fontScale * 4}
        onIconPress={changeCategory}
        {...sectionListItemProps}
      />
    </View>
  )

  return (
    <FlatList
      data={iconCategories}
      keyExtractor={_keyExtractor}
      renderItem={renderItem}
      ListFooterComponent={SectionListFooter}
      onScroll={onScrollSectionList}
    />
  )
}

Sections.defaultProps = {
  fontScale: 12,
  containerProps: {},
  sectionListItemProps: {},
  sectionListHeaderProps: {}
}

export default React.memo(Sections)

const _styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: "3%" }
})

const _keyExtractor = ({ id }) => id.toString()
