import React from "react"
import UI from "@app-components/UI"
import ProjectsCardContent from "./ProjectsCardContent"
import ProjectsCardPointer from "./ProjectsCardPointer"

export default function ProjectsCard({
  active,
  showPointer,
  index,
  title,
  subtitle,
  actions,
  images
}) {
  return (
    <UI.Card.WithAnimation active={active} index={index}>
      <ProjectsCardContent
        title={title}
        subtitle={subtitle}
        images={images}
        actions={actions}
      />
      <ProjectsCardPointer active={showPointer} />
    </UI.Card.WithAnimation>
  )
}

ProjectsCard.defaultProps = { index: 0 }
