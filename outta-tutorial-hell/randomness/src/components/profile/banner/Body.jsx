import React, { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import BodyContent from "./BodyContent"
import UI from "@app-components/UI"

function Body({
  bullets,
  fontScale,
  flexValue,
  style,
  activeIconId,
  onScrollBodySectionList
}) {
  const [showArrows, setShowArrows] = useState(bullets.length >= 3)

  const hideArrowsAndTriggerParentCallback = useCallback((e) => {
    setShowArrows(false)
    onScrollBodySectionList?.(e.nativeEvent)
  }, [])

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent
        bullets={bullets}
        activeIconId={activeIconId}
        mayShowArrows={setShowArrows}
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
