import React, { useState, useCallback, useContext } from "react"
import { StyleSheet, View } from "react-native"
import Sections from "./Sections"
import UI from "@app-components/UI"
import Context from "@app-context"

function Root({ containerProps, sectionProps, arrowProps }) {
  const { fontScale } = useContext(Context.Profile.Body.Consumable)
  const [showArrows, setShowArrows] = useState(true)

  const hideArrows = useCallback(() => setShowArrows(false), [])

  return (
    <View style={_styles.container} {...containerProps}>
      <Sections
        fontScale={fontScale}
        onScrollSectionList={hideArrows}
        {...sectionProps}
      />
      <UI.Arrow.MultipleWithShow
        show={showArrows}
        size={fontScale * 1.5}
        direction="down"
        {...arrowProps}
      />
    </View>
  )
}

Root.defaultProps = {
  containerProps: {},
  sectionProps: {},
  swipeArrowProps: {}
}

export default React.memo(Root)

const _styles = StyleSheet.create({
  container: { width: "100%", position: "relative" }
})
