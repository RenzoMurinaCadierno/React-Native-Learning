import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import Placeholder from "./Placeholder"
import Header from "./Header"
import Body from "./Body"
import Layout from "@app-components/layout"
import useSelectProfile from "@app-hooks/useSelectProfile"
import sharedStyles from "@app-constants/styles"

export default function Root({
  fontScale,
  containerStyle,
  headerProps,
  bodyProps,
  placeHolderProps,
  containerProps
}) {
  const [sectionListOffsetY, setSectionListOffsetY] = useState(0)
  const { activeSection, activeSubSectionId } = useSelectProfile()

  return !Boolean(activeSubSectionId) ? (
    <Placeholder fontScale={fontScale} {...placeHolderProps} />
  ) : (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <Header
        fontScale={fontScale}
        title={activeSection.title}
        titleColor={activeSection.color}
        subtitle={activeSection.subtitle}
        category={activeSection.category}
        sectionListOffsetY={sectionListOffsetY}
        {...headerProps}
      />
      <Layout.Divider />
      <Body
        bullets={activeSection.bullets}
        fontScale={fontScale}
        flexValue={1}
        activeIconId={activeSubSectionId}
        onScrollBodySectionList={setSectionListOffsetY}
        {...bodyProps}
      />
    </View>
  )
}

Root.defaultProps = {
  containerProps: {},
  headerProps: {},
  bodyProps: {},
  placeHolderProps: {}
}

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    ...sharedStyles.ELEVATION_SUBTLE,
    width: "100%"
  }
})
