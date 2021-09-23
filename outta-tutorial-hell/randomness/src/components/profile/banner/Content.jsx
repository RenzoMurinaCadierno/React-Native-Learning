import React from "react"
import { StyleSheet, View } from "react-native"
import Header from "./Header"
import Body from "./Body"
import { default as sharedStyles } from "@constants/styles"

export default function Content({ content, fontScale, style }) {
  const { title, subtitle, category, color } = content
  return (
    <View style={[_styles.container, style]}>
      <Header
        fontScale={fontScale}
        flexValue={0.4}
        title={title}
        titleColor={color}
        subtitle={subtitle}
        category={category}
      />
      <Body fontScale={fontScale} flexValue={0.6} />
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
