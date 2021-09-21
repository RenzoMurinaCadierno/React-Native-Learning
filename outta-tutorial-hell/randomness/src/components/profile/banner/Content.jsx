import React from "react"
import { StyleSheet, View } from "react-native"
import Header from "./Header"
import Body from "./Body"
import { default as sharedStyles } from "@constants/styles"

export default function Content({ items, fontScale, style }) {
  return (
    <View style={[_styles.container, style]}>
      <Header fontScale={fontScale} flexValue={0.3} />
      <Body fontScale={fontScale} flexValue={0.7} />
    </View>
  )
}

Content.defaultProps = { fontScale: 16 }

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    width: "100%"
  }
})
