import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { ActionsContext } from "./ActionsContainer"
import IconWithScale from "../Icon/IconWithScale"
import animations from "@app-constants/animations"
import useViewPortContext from "@app-hooks/useViewPortContext"

function ActionIcon({ id, size, onPress, ...rest }) {
  const { vw } = useViewPortContext()
  const [activeIcon, changeActiveIcon] = useContext(ActionsContext)

  const handlePress = () => {
    changeActiveIcon(id)
    onPress?.()
  }

  return (
    <IconWithScale
      size={size ?? vw(7)}
      onPress={handlePress}
      colorProps={_getAnimationProps("color")}
      scaleProps={_getAnimationProps("scale")}
      style={_styles.container}
      {...rest}
      active={activeIcon === id}
    />
  )
}

ActionIcon.defaultProps = { active: false, name: "help-outline" }

export default React.memo(ActionIcon)

const _styles = StyleSheet.create({ container: { marginHorizontal: 2 } })

function _getAnimationProps(animationName) {
  return {
    activeAnimation: animations.card.actionIcon[animationName].IN,
    inactiveAnimation: animations.card.actionIcon[animationName].OUT
  }
}
