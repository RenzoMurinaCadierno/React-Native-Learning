import React from "react"
import TextWithTranslateTransition from "../Text/TextWithTranslateTransition"

export default function ActionText({ active, size, ...rest }) {
  return (
    <TextWithTranslateTransition
      active={active}
      size={size}
      orientation="left"
      type="semi-bold-italic"
      translateOutputRange={[-200, 0]}
      {...rest}
    />
  )
}

ActionText.defaultProps = { size: 17 }
