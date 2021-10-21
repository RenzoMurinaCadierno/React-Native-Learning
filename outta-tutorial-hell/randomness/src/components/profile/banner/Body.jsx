import React, { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import UI from "@app-components/UI"
import BodyContent from "./BodyContent"

function Body({
  bullets,
  fontScale,
  flexValue,
  style,
  activeIconId,
  onScrollBodySectionList
}) {
  const [showArrows, setShowArrows] = useState(true)

  const hideArrowsAndTriggerParentCallback = useCallback((e) => {
    setShowArrows(false)
    onScrollBodySectionList?.(e.nativeEvent.contentOffset.y)
  }, [])

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent
        bullets={bullets}
        activeIconId={activeIconId}
        onScrollSectionList={hideArrowsAndTriggerParentCallback}
        fontScale={fontScale}
      />
      <UI.Arrow.MultipleWithShow
        show={Boolean(bullets.length) && showArrows}
        size={fontScale}
        direction="down"
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
