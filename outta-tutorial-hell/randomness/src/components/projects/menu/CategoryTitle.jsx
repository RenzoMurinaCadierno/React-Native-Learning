import React from "react"
import { useSelector } from "react-redux"
import TextWithTranslateTransition from "../../UI/Text/TextWithTranslateTransition"
import useViewPortContext from "@app-hooks/useViewPortContext"

export default function CategoryTitle(props) {
  const { vw } = useViewPortContext()
  const icons = useSelector((state) => state.projects.icons)
  const activeSectionId = useSelector((state) => state.projects.activeSectionId)

  return icons.map((icon) => (
    <TextWithTranslateTransition
      key={icon.id}
      active={icon.id === activeSectionId}
      orientation="top"
      translateOutputRange={[-vw(10), 0]}
      type="semi-bold"
      size={vw(6)}
      elevation={vw(0.5)}
      color={icon.activeColor}
      style={{ marginTop: vw(4), textAlign: "center" }}
      {...props}
    >
      {icon.shortName}
    </TextWithTranslateTransition>
  ))
}
