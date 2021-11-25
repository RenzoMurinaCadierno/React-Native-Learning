import React, { useCallback, useState } from "react"
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import BodyContent from "./BodyContent"
import UI from "@app-components/UI"
import { screenNames } from "@app-constants/navigation"
import * as projectsActions from "@app-store/actions/projects"

function Body({
  fontScale,
  bullets,
  flexValue,
  style,
  activeIconId,
  onScrollBodySectionList
}) {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [showArrows, setShowArrows] = useState(bullets.length >= 3)

  const hideArrowsAndTriggerParentCallback = useCallback((e) => {
    setShowArrows(false)
    onScrollBodySectionList?.(e.nativeEvent)
  }, [])

  const moveToProjectsSectionAndTargetItem = useCallback(
    (iconId, itemPrimaryKey) => {
      dispatch(projectsActions.setActivePointer(iconId, itemPrimaryKey))
      navigation.navigate(screenNames.PROJECTS)
    },
    []
  )

  return (
    <View style={[_styles.container, { flex: flexValue }, style]}>
      <BodyContent
        bullets={bullets}
        activeIconId={activeIconId}
        mayShowArrows={setShowArrows}
        onBulletPress={moveToProjectsSectionAndTargetItem}
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
