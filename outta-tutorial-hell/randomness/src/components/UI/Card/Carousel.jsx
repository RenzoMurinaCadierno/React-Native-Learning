import React from "react"
import { FlatList } from "react-native"
import CardImage from "./Image"
import useLayout from "@app-hooks/useLayout"

const dummy = [
  { source: require("@app-assets/images/rfh00.jpg") },
  { source: require("@app-assets/images/imgNotFound.jpg") },
  { source: require("@app-assets/images/rfh00.jpg") }
]

export default function Carousel({ imageProps, ...rest }) {
  const [layout, onLayoutChange] = useLayout()

  function renderItem({ item, index }) {
    return (
      <CardImage
        key={index}
        containerStyle={{
          width: layout.width,
          height: layout.height,
          marginRight: index + 1 === dummy.length ? 0 : 5
        }}
        source={item.source}
        {...imageProps}
      />
    )
  }

  return (
    <FlatList
      data={dummy}
      keyExtractor={_keyExtractor}
      renderItem={renderItem}
      onLayout={onLayoutChange}
      horizontal
      {...rest}
    />
  )
}

Carousel.defaultProps = { imageProps: {} }

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
