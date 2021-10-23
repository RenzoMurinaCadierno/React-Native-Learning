import React from "react"
import UI from "@app-components/UI"

export default function ProjectsCard({ title, subtitle, actions, images }) {
  return (
    <UI.Card>
      <UI.Card.Text.Title>{title}</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Carousel images={images} />
      <UI.Card.Actions>
        {actions.map(({ id, iconName }) => (
          <UI.Card.Actions.Icon key={id} id={id} name={iconName} />
        ))}
      </UI.Card.Actions>
    </UI.Card>
  )
}
