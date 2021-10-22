import React, { useState } from "react"
import UI from "@app-components/UI"

const dummy = [0, 1, 2]

export default function ProjectsCard({ title, subtitle, imageUris }) {
  const [active, setActive] = useState(null)

  return (
    <UI.Card>
      <UI.Card.Text.Title>{title}</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Card.Carousel imageUris={imageUris} />
      {/* <UI.Card.Image
        // source={{
        //   uri: "https://esports.as.com/2021/08/12/pokemon/Eevee_1491460844_733117_1024x576.jpg"
        // }}
        source={require("@app-assets/images/rfh00.jpg")}
      /> */}
      <UI.Card.Actions>
        {dummy.map((i) => (
          <UI.Card.Actions.Icon
            key={i}
            active={i === active}
            index={i}
            onPress={() => setActive(i)}
          />
        ))}
      </UI.Card.Actions>
    </UI.Card>
  )
}
