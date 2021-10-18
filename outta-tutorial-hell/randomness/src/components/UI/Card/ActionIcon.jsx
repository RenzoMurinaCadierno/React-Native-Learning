import React, { useContext } from "react"
import CardContext from "./context"
import IconWithScale from "../Icon/IconWithScale"
import animations from "@app-constants/animations"
import { StyleSheet } from "react-native"

function ActionIcon({ size, ...rest }) {
  const vw = useContext(CardContext)

  return (
    <IconWithScale
      size={size ?? vw(7)}
      colorProps={_getAnimationProps("color")}
      scaleProps={_getAnimationProps("scale")}
      style={_styles.container}
      {...rest}
    />
  )
}
add icon images and toastandroid to open links in new tab
then 1/2, 2/2, then >>> to scroll
ActionIcon.defaultProps = { active: false, name: "help-outline" }

export default React.memo(ActionIcon)

const _styles = StyleSheet.create({ container: { marginHorizontal: 2 } })

function _getAnimationProps(animationName) {
  return {
    activeAnimation: animations.card.actionIcon[animationName].IN,
    inactiveAnimation: animations.card.actionIcon[animationName].OUT
  }
}
