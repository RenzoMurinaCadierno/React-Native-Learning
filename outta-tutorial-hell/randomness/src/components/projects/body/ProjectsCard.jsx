import React from "react"
import ProjectsCardActions from "./ProjectsCardActions"
import UI from "@app-components/UI"

export default function ProjectsCard({
  active,
  index,
  title,
  subtitle,
  actions,
  images
}) {
  return (
    <UI.Card.WithAnimation active={active} index={index}>
      <UI.Card.Text.Title>{title}</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Carousel images={images} containerStyle={{ marginTop: 7 }} />
      <ProjectsCardActions actions={actions} title={title} />
    </UI.Card.WithAnimation>
  )
}

ProjectsCard.defaultProps = { index: 0 }
