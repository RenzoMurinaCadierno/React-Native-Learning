import React from "react"
import UI from "@app-components/UI"

export default function ProjectsCard({ title, subtitle, actions, images }) {
  return (
    <UI.Card>
      <UI.Card.Text.Title>{title}</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Carousel images={images} containerStyle={{ marginTop: 7 }} />
      <UI.Card.Actions>
        {actions.map(({ id, iconName, actionText }) => (
          <UI.Card.Actions.Icon
            key={id}
            id={id}
            name={iconName}
            actionText={actionText}
          />
        ))}
      </UI.Card.Actions>
    </UI.Card>
  )
}
