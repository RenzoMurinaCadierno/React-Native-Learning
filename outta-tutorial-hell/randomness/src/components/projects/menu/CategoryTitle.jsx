import React, { useContext } from "react"
import { useSelector } from "react-redux"
import TextWithTranslateTransition from "../../UI/Text/TextWithTranslateTransition"
import Context from "@app-context"

export default function CategoryTitle(props) {
  const { fontScale } = useContext(Context.Projects.Menu.Consumable)
  const icons = useSelector((state) => state.projects.icons)
  const activeSectionId = useSelector((state) => state.projects.activeSectionId)

  return icons.map((icon) => (
    <TextWithTranslateTransition
      key={icon.id}
      active={icon.id === activeSectionId}
      orientation="top"
      translateOutputRange={[-20, 0]}
      type="semi-bold"
      size={fontScale * 0.55}
      elevation={fontScale * 0.05}
      shadowRadius={fontScale * 0.05}
      color={icon.activeColor}
      style={{ marginTop: fontScale * 0.4, textAlign: "center" }}
      {...props}
    >
      {icon.shortName}
    </TextWithTranslateTransition>
  ))
}

CategoryTitle.defaultProps = { fontScale: 30 }
