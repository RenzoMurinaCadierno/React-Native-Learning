import React, { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import CardImage from "./Image"

const dummy = [
  { source: require("@app-assets/images/rfh00.jpg") },
  { source: require("@app-assets/images/imgNotFound.jpg") },
  { source: require("@app-assets/images/rfh00.jpg") }
]

// try flatlist, maybe?
// if horizontal scroll works, add 1/3. 2/3. 3/3. Then go to github/example at last slide
export default function Carousel({ ...rest }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const setDimensionsFromLayout = (e) => {
    setDimensions({
      width: e?.nativeEvent?.layout?.width,
      height: e?.nativeEvent?.layout?.height
    })
  }

  function renderItem({ item, index }) {
    return (
      <CardImage
        key={index}
        containerStyle={{
          ...dimensions,
          marginRight: index + 1 === dummy.length ? 0 : 5
          // transform: [{ scale: 0.5 }]
        }}
        // style={{ transform: [{ scale: 0.5 }] }}
        source={item.source}
      />
    )
  }

  return (
    <FlatList
      data={dummy}
      keyExtractor={_keyExtractor}
      renderItem={renderItem}
      onLayout={setDimensionsFromLayout}
      horizontal
      // style={{ transform: [{ scaleY: 0.5 }] }}
      // style={{ backgroundColor: "blue", transform: [{ scale: 0 }] }}
      // contentContainerStyle={{
      // backgroundColor: "red",
      // transform: [{ scale: 0 }]
      // }}
    />
  )
}

function _keyExtractor(_, index) {
  return index.toString()
}

// const _styles = StyleSheet.create({
// container: {
//   borderWidth: 1,
//   borderColor: "red",
//   backgroundColor: "white"
// }
// card: { marginHorizontal: 5 }
// })
