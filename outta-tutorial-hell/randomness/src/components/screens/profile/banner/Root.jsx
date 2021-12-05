import React, { useState, useCallback, useContext } from "react"
import { StyleSheet, View } from "react-native"
import Placeholder from "./Placeholder"
import Header from "./Header"
import Body from "./Body"
import Layout from "@app-components/layout"
import { useSelectProfile } from "@app-hooks"
import sharedStyles from "@app-constants/styles"
import Context from "@app-context"

export default function Root({
  containerStyle,
  headerProps,
  bodyProps,
  placeHolderProps,
  containerProps
}) {
  const { headerShrinkThereshold, fontScale, isSmallDevice } = useContext(
    Context.Profile.Banner.Consumable
  )
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const { activeSection, activeSubSectionId } = useSelectProfile()

  const mayShrinkHeader = useCallback(
    ({ contentOffset, contentSize }) => {
      // Prevents shrinking if list is too small, and controlls it if list is
      // long enough. Avoids stuttering provoked by auto-scrolling when list
      // adapts to new header height when shrinking or growing
      setShrinkHeader(
        contentSize.height >= headerShrinkThereshold && // height >= thereshold
          contentOffset.y >= headerShrinkThereshold * 0.1 // shrink @ 10% scroll
      )
    },
    [headerShrinkThereshold]
  )

  return !Boolean(activeSubSectionId) ? (
    <Placeholder
      fontScale={fontScale}
      isSmallDevice={isSmallDevice}
      {...placeHolderProps}
    />
  ) : (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <Header
        fontScale={fontScale}
        title={activeSection.title}
        titleColor={activeSection.color}
        subtitle={activeSection.subtitle}
        category={activeSection.category}
        shrinkHeader={shrinkHeader}
        {...headerProps}
      />
      <Layout.Divider />
      <Body
        bullets={activeSection.bullets}
        fontScale={fontScale}
        flexValue={1}
        activeIconId={activeSubSectionId}
        onScrollBodySectionList={mayShrinkHeader}
        {...bodyProps}
      />
    </View>
  )
}

Root.defaultProps = {
  containerProps: {},
  headerProps: {},
  bodyProps: {},
  placeHolderProps: {}
}

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.FLEX_CENTER,
    ...sharedStyles.ELEVATION_SUBTLE,
    width: "100%"
  }
})
