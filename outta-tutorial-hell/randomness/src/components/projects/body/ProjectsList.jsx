import React from "react"
import { View, Text, FlatList } from "react-native"
import UI from "@app-components/UI"

export default function ProjectsList() {
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
    </UI.Card>
  )
}
