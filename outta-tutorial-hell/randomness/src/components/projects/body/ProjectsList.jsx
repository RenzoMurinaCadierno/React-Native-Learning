import React, { useState } from "react"
import { View, Text, FlatList } from "react-native"
import UI from "@app-components/UI"

const dummy = [0, 1, 2]

export default function ProjectsList() {
  const [active, setActive] = useState(null)
  return (
    <UI.Card>
      <UI.Card.Text.Title>React Fanmade Hooks</UI.Card.Text.Title>
      <UI.Card.Text.Subtitle>
        Hooks for many needs made by React enthusiasts
      </UI.Card.Text.Subtitle>
      <UI.Card.Carousel />
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
