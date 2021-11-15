import React from "react"
import { useSelector } from "react-redux"
import TextWithTranslateTransition from "../../UI/Text/TextWithTranslateTransition"

export default function CategoryTitle({ active, ...rest }) {
  const { icons, activeSectionId } = useSelector((state) => state.projects)
  add margin here
  return icons.map((icon) => (
    <TextWithTranslateTransition
      key={icon.id}
      active={icon.id === activeSectionId}
      orientation="top"
      style={{ transform: [{ rotate: "90deg" }] }}
      {...rest}
    >
      {icon.id}
    </TextWithTranslateTransition>
  ))
}
