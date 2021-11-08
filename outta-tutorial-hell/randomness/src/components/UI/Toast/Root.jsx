import React from "react"
import useViewPort from "@app-hooks/useViewPort"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import useTimeoutToggle from "@app-hooks/useTimeoutToggle"
import animations from "@app-constants/animations"
import Body from "./Body"

export default function Root({ show, timeout, ...rest }) {
  const viewPort = useViewPort()
  const active = useTimeoutToggle(show, timeout)
  const val = useLinearAnimatedValue({
    active,
    activeAnimation: animations.effects.default.IN,
    inactiveAnimation: animations.effects.default.OUT
  })

  return <Body viewPort={viewPort} animatedValue={val} {...rest} />
}

Root.defaultProps = { timeout: 10000, show: true }
