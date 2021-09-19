import React from "react"
import AppText from "./Text"
import Icon from "./Icon/Icon"
import Shadow from "./Icon/Shadow"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Shadow = Shadow

const UI = { Text: AppText, Icon: ComposedIcon }

export default UI
