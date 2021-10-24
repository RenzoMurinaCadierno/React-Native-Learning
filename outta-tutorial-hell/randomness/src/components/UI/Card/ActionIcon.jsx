import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { ActionsContext } from "./ActionsContainer"
import IconWithScale from "../Icon/IconWithScale"
import animations from "@app-constants/animations"
import useViewPortContext from "@app-hooks/useViewPortContext"
import ActionText from "./ActionText"

function ActionIcon({ id, size, actionText, onPress, ...rest }) {
  const { vw } = useViewPortContext()
  const [activeIcon, changeActiveIcon] = useContext(ActionsContext)

  const handlePress = () => {
    changeActiveIcon(id)
    onPress?.()
  }
  change icon color on active, then activeicon to '' on profile, then contacts
  return (
    <>
      <IconWithScale
        style={_styles.container}
        size={size ?? vw(7)}
        onPress={handlePress}
        colorProps={_getAnimationProps("color")}
        scaleProps={_getAnimationProps("scale")}
        {...rest}
        active={activeIcon === id}
      />
      {actionText && (
        <ActionText active={activeIcon === id}>{actionText}</ActionText>
      )}
    </>
  )
}

ActionIcon.defaultProps = { active: false, name: "help-outline" }

export default React.memo(ActionIcon)

const _styles = StyleSheet.create({
  container: { marginHorizontal: 2, flexDirection: "row" }
})

function _getAnimationProps(animationName) {
  return {
    activeAnimation: animations.card.actionIcon[animationName].IN,
    inactiveAnimation: animations.card.actionIcon[animationName].OUT
  }
}
