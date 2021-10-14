import React, { useRef, useEffect } from "react"
import { View, StyleSheet, SectionList } from "react-native"
import BodyBullet from "./BodyBullet"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import { default as sharedStyles } from "@app-constants/styles"

function BodyContent({
  bullets,
  fontScale,
  activeIconId,
  onScrollSectionList
}) {
  const sectionListRef = useRef()

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={_styles.title}>
      <UI.Text
        color={colors.main.PRIMARY}
        size={fontScale * 1.3}
        elevation={3.5}
        shadowColor={colors.accent.PRIMARY}
        style={_styles.title}
      >
        {title}
      </UI.Text>
    </View>
  )

  const renderItem = ({
    item: { iconName, iconType, text, sideText, descriptionText },
    index
  }) => (
    <BodyBullet
      type={index % 2 === 0 ? "primary" : "secondary"}
      {...{ iconName, iconType, text, sideText, descriptionText, fontScale }}
    />
  )

  useEffect(() => {
    if (Boolean(bullets.length)) {
      sectionListRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex: 0,
        animated: false
      })
    }
  }, [activeIconId])

  return (
    <SectionList
      ref={sectionListRef}
      sections={bullets}
      renderSectionHeader={renderSectionHeader}
      SectionSeparatorComponent={_SectionSeparatorComponent}
      renderItem={renderItem}
      keyExtractor={_keyExtractor}
      style={_styles.container}
      onScroll={onScrollSectionList}
      // scrollEventThrottle={1}
      stickySectionHeadersEnabled
    />
  )
}

BodyContent.defaultProps = { bullets: [] }

export default React.memo(BodyContent)

const _styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  title: {
    backgroundColor: `rgba(${colors.background.CONTRAST_RGB}, 0.4)`,
    textAlign: "right",
    paddingRight: "1%"
  },
  titleElevation: {
    width: "100%",
    ...sharedStyles.ELEVATION_SUBTLE
  }
})

function _SectionSeparatorComponent() {
  return <View style={_styles.titleElevation} />
}

function _keyExtractor(_, index) {
  return index.toString()
}
