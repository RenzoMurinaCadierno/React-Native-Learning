import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import CardImage from "./Image"

const dummy = [
  require("@app-assets/images/rfh00.jpg"),
  require("@app-assets/images/imgNotFound.jpg"),
  require("@app-assets/images/rfh00.jpg")
]
try flatlist, maybe?
if horizontal scroll works, add 1/3. 2/3. 3/3. Then go to github/example at last slide
export default function Carousel({ ...rest }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={_styles.container}
      onScroll={() => console.log("asd")}
    >
      {new Array(100).fill(null).map((u, i) => (
        <Text key={i}>asd + {i.toString()}</Text>
      ))}
      {dummy.map((source, i) => (
        <CardImage key={i} containerStyle={_styles.card} source={source} />
      ))}
    </ScrollView>
  )
}

const _styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white"
  },
  card: { width: "100%" }
})
