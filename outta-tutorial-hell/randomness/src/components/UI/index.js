import React from "react"
import Spring from "./Animation/Spring"
import TextBase from "./Text/Base"
import TextWithTransition from "./Text/TextWithTransition"
import DirectionalArrows from "./DirectionalArrows/DirectionalArrows"
import Icon from "./Icon/Icon"
import Aura from "./Icon/Aura"
import IconBase from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithSpring from "./Icon/IconWithSpring"
import IconWithHover from "./Icon/IconWithHover"
import IconWithCircle from "./Icon/IconWithCircle"
import IconWithAura from "./Icon/IconWithAura"
import IconWithColorTransition from "./Icon/IconWithColorTransition"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Aura = Aura
ComposedIcon.Base = IconBase
ComposedIcon.Shadow = Shadow
ComposedIcon.WithCircle = IconWithCircle
ComposedIcon.WithAura = IconWithAura
ComposedIcon.WithColorTransition = IconWithColorTransition
ComposedIcon.WithHover = IconWithHover
ComposedIcon.WithSpring = IconWithSpring

function ComposedText(props) {
  return <TextBase {...props} />
}

ComposedText.WithTransition = TextWithTransition

const Animation = { Spring }

const UI = {
  Animation,
  Text: ComposedText,
  Icon: ComposedIcon,
  DirectionalArrows
}

export default UI
