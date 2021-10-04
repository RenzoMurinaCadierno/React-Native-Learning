import React, { useCallback, useState } from "react"
import { StyleSheet, View } from "react-native"
import Header from "./Header"
import Body from "./Body"
import Layout from "@app-components/layout"
import { default as sharedStyles } from "@app-constants/styles"
import useSelectProfile from "@app-hooks/useSelectProfile"

export default function Content({ activeIconId, fontScale, style }) {
  const { activeSection } = useSelectProfile(activeIconId)
  const [sectionListOffsetY, setSectionListOffsetY] = useState(0)

  return (
    <View style={[_styles.container, style]}>
      <Header
        fontScale={fontScale}
        // flexValue={1}
        title={activeSection.title}
        titleColor={activeSection.color}
        subtitle={activeSection.subtitle}
        category={activeSection.category}
        sectionListOffsetY={sectionListOffsetY}
      />
      <Layout.Divider />
      <Body
        bullets={activeSection.bullets}
        fontScale={fontScale}
        flexValue={1}
        onScrollBodySectionList={setSectionListOffsetY}
      />
    </View>
  )
}

Content.defaultProps = { content: {}, fontScale: 16 }

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    width: "100%"
  }
})
