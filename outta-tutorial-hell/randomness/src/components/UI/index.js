import React from "react"
import AppText from "./Text/Text"
import DirectionalArrows from "./DirectionalArrows/DirectionalArrows"
import Icon from "./Icon/Icon"
import Aura from "./Icon/Aura"
import Base from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithHover from "./Icon/IconWithHover"
import IconWithCircle from "./Icon/IconWithCircle"
import IconWithAura from "./Icon/IconWithAura"
import IconWithColorTransition from "./Icon/IconWithColorTransition"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Aura = Aura
ComposedIcon.Base = Base
ComposedIcon.Shadow = Shadow
ComposedIcon.WithCircle = IconWithCircle
ComposedIcon.WithAura = IconWithAura
ComposedIcon.WithColorTransition = IconWithColorTransition
ComposedIcon.WithHover = IconWithHover

const UI = { Text: AppText, Icon: ComposedIcon, DirectionalArrows }

export default UI
