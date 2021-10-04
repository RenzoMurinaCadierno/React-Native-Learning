import React, { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import SwipeArrows from "./SwipeArrows"
import BodyContent from "./BodyContent"

function Body({
  bullets,
  fontScale,
  flexValue,
  style,
  onScrollBodySectionList
}) {
  console.log("render")
  const [showArrows, setShowArrows] = useState(true)

  const hideArrowsAndTriggerParentCallback = useCallback((e) => {
    setShowArrows(false)
    onScrollBodySectionList?.(e.nativeEvent.contentOffset.y)
  }, [])

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent
        bullets={bullets}
        onScrollSectionList={hideArrowsAndTriggerParentCallback}
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

export default React.memo(Body)

const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%"
  }
})
