import React from "react"
import {
  useLinearAnimatedValue,
  useViewPort,
  useTimeoutToggle
} from "@app-hooks"
import animations from "@app-constants/animations"
import Body from "./Body"

export default function Root({
  show,
  timeout,
  manualCloseOn,
  onShow,
  onHide,
  onManualClose,
  ...rest
}) {
  const viewPort = useViewPort()
  const active = useTimeoutToggle(show, {
    timeout,
    manualCloseOn,
    onTimeoutStart: onShow,
    onManualClose
  })
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.effects.default.IN,
    inactiveAnimation: animations.effects.default.OUT,
    onInactiveFinish: onHide
  })

  return <Body viewPort={viewPort} animatedValue={animatedValue} {...rest} />
}
