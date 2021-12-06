import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { ActionsContext } from "./ActionsContainer"
import IconWithScale from "../Icon/IconWithScale"
import ActionText from "./ActionText"
import { animations } from "@app-constants"

function ActionIcon({
  id,
  size,
  actionText,
  onIconPress,
  onActionTextPress,
  actionTextProps,
  ...rest
}) {
  const [activeIcon, changeActiveIcon] = useContext(ActionsContext)

  const handlePress = () => {
    changeActiveIcon(id)
    onIconPress?.(id)
  }

  return (
    <>
      <IconWithScale
        style={_styles.container}
        size={size}
        onPress={handlePress}
        colorProps={_getAnimationProps("color")}
        scaleProps={_getAnimationProps("scale")}
        {...rest}
        active={activeIcon === id}
      />
      {typeof actionText === "string" && (
        <ActionText
          active={activeIcon === id}
          onPress={onActionTextPress}
          {...actionTextProps}
        >
          {actionText}
        </ActionText>
      )}
    </>
  )
}

ActionIcon.defaultProps = {
  active: false,
  size: 26,
  name: "help-outline",
  actionTextProps: {}
}

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
