import React from "react"
import AppText from "./Text/Text"
import Icon from "./Icon/Icon"
import Aura from "./Icon/Aura"
import Base from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithHover from "./Icon/IconWithHover"
import IconWithCircle from "./Icon/IconWithCircle"
import IconWithColorTransition from "./Icon/IconWithColorTransition"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Aura = Aura
ComposedIcon.Base = Base
ComposedIcon.Shadow = Shadow
ComposedIcon.WithCircle = IconWithCircle
ComposedIcon.WithColorTransition = IconWithColorTransition
ComposedIcon.WithHover = IconWithHover

const UI = { Text: AppText, Icon: ComposedIcon }

export default UI
