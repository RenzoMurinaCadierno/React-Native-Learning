import React from "react"
import AppText from "./Text/Text"
import Icon from "./Icon/Icon"
import Base from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithHover from "./Icon/IconWithHover"
import IconWithColorTransition from "./Icon/IconWithColorTransition"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Base = Base
ComposedIcon.Shadow = Shadow
ComposedIcon.IconWithColorTransition = IconWithColorTransition
ComposedIcon.IconWithHover = IconWithHover

const UI = { Text: AppText, Icon: ComposedIcon }

export default UI
