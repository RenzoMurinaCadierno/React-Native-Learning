import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import Sections from "./Sections"
import SwipeArrows from "../shared/SwipeArrows"

export default function Root({
  containerProps,
  scrollViewProps,
  swipeArrowProps,
  fontScale,
  ...rest
}) {
  const [showArrows, setShowArrows] = useState(true)

  const hideArrows = () => showArrows && setShowArrows(false)
  console.log("render", swipeArrowProps)
  return (
    <View style={_styles.container} {...containerProps}>
      <ScrollView
        onScroll={hideArrows}
        scrollEventThrottle={250}
        {...scrollViewProps}
      >
        <Sections fontScale={fontScale} {...rest} />
      </ScrollView>
      {/* <SwipeArrows
        show={showArrows}
        size={fontScale * 1.5}
        {...swipeArrowProps}
      /> */}
    </View>
  )
}

Root.defaultProps = {
  containerProps: {},
  scrollViewProps: {},
  swipeArrowProps: {}
}

const _styles = StyleSheet.create({
  container: { width: "100%", position: "relative" }
})
