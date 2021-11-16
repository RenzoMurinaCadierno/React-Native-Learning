import React from "react"
import TextWithTranslateTransition from "../Text/TextWithTranslateTransition"
import useViewPortContext from "@app-hooks/useViewPortContext"

export default function ActionText({ active, ...rest }) {
  const { vw } = useViewPortContext()

  return (
    <TextWithTranslateTransition
      active={active}
      orientation="left"
      size={vw(4.5)}
      type="semi-bold-italic"
      translateOutputRange={[-vw(50), 0]}
      {...rest}
    />
  )
}
