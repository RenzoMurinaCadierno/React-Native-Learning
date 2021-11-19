import React from "react"
import ProjectsCardActions from "./ProjectsCardActions"
import UI from "@app-components/UI"
import ProjectsCardPointer from "./ProjectsCardPointer"
import { StyleSheet } from "react-native"

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
    <UI.Card.WithAnimation
      active={active}
      index={index}
      style={_styles.container}
    >
      <UI.Card.Text.Title>{title}</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Carousel images={images} containerStyle={{ marginTop: 7 }} />
      <ProjectsCardActions actions={actions} title={title} />
      <ProjectsCardPointer active={showPointer} />
    </UI.Card.WithAnimation>
  )
}

const _styles = StyleSheet.create({ container: { position: "relative" } })

ProjectsCard.defaultProps = { index: 0 }
