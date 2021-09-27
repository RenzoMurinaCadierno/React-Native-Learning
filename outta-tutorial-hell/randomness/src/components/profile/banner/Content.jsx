import React from "react"
import { StyleSheet, View } from "react-native"
import Header from "./Header"
import Body from "./Body"
import { default as sharedStyles } from "@app-constants/styles"
import useSelectProfile from "@app-hooks/useSelectProfile"

export default function Content({ activeIconId, fontScale, style }) {
  const { activeSection } = useSelectProfile(activeIconId)

  return (
    <View style={[_styles.container, style]}>
      <Header
        fontScale={fontScale}
        flexValue={0.4}
        title={activeSection.title}
        titleColor={activeSection.color}
        subtitle={activeSection.subtitle}
        category={activeSection.category}
      />
      <Body
        bullets={activeSection.bullets}
        fontScale={fontScale}
        flexValue={0.6}
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
