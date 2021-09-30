import React, { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import SwipeArrows from "./SwipeArrows"
import BodyContent from "./BodyContent"

export default function Body({ bullets, fontScale, flexValue, style }) {
  const [showArrows, setShowArrows] = useState(true)

  const hideArrows = useCallback(() => setShowArrows(false), [])

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent
        bullets={bullets}
        onScrollSectionList={hideArrows}
        fontScale={fontScale}
      />
      <SwipeArrows
        show={Boolean(bullets.length) && showArrows}
        fontScale={fontScale}
      />
    </View>
  )
}

Body.defaultProps = { bullets: [] }

const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%"
  }
})
