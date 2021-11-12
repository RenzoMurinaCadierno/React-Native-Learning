import React, { useState, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import Placeholder from "./Placeholder"
import Header from "./Header"
import Body from "./Body"
import Layout from "@app-components/layout"
import useSelectProfile from "@app-hooks/useSelectProfile"
import sharedStyles from "@app-constants/styles"

export default function Root({
  fontScale,
  headerShrinkThereshold,
  containerStyle,
  headerProps,
  bodyProps,
  placeHolderProps,
  containerProps
}) {
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const { activeSection, activeSubSectionId } = useSelectProfile()

  const mayShrinkHeader = useCallback(
    ({ contentOffset, contentSize }) => {
      // Prevents shrinking if list is too small, and controlls it if list is
      // long enough. Avoids stuttering provoked by auto-scrolling when list
      // adapts to new header height when it shrinks or grows
      setShrinkHeader(
        contentSize.height >= headerShrinkThereshold && // height >= thereshold
          contentOffset.y >= headerShrinkThereshold / 10 // shrink at 10% scroll
      )
    },
    [headerShrinkThereshold]
  )
    add more stuff to mockdb to test behavior. Then fb
  return !Boolean(activeSubSectionId) ? (
    <Placeholder fontScale={fontScale} {...placeHolderProps} />
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
