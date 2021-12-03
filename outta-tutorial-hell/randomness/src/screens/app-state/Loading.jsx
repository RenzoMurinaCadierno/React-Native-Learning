import React from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import Layout from "@app-components/layout"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
add activitiyindicator on top left, then fade in transition for screens onload
export default function Loading({ children, containerProps, ...rest }) {
  return (
    <Layout.Screen {...containerProps}>
      {/* <ActivityIndicator size="large" color={colors.main.SECONDARY} /> */}
      <UI.Marquee containerStyle={_styles.marqueeContainer} {...rest}>
        Loading
      </UI.Marquee>
    </Layout.Screen>
  )
}

Loading.defaultProps = { containerProps: {} }

const _styles = StyleSheet.create({
  marqueeContainer: { position: "absolute", bottom: 15 }
})
