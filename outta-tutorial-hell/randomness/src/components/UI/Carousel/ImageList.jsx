import React, { useCallback, useRef } from "react"
import { FlatList } from "react-native"
import CarouselImage from "./Image"
import useLayout from "@app-hooks/useLayout"

export default function ImageList({
  images,
  onNextImageIndex,
  imageProps,
  ...rest
}) {
  const [layout, onLayoutChange] = useLayout()

  function renderItem({ item, index }) {
    return (
      <CarouselImage
        key={index}
        containerStyle={{
          width: layout.width,
          height: layout.height,
          marginRight: index + 1 === images.length ? 0 : 5
        }}
        source={{ uri: item.uri }}
        {...imageProps}
      />
    )
  }
  console.log(layout) check why so many renders
  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    onNextImageIndex?.(viewableItems?.[0]?.index)
  }, [])

  return (
    <FlatList
      data={images}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={_viewabilityConfig}
      keyExtractor={_keyExtractor}
      renderItem={renderItem}
      onLayout={onLayoutChange}
      horizontal
      {...rest}
    />
  )
}

ImageList.defaultProps = { imageProps: {} }

function _keyExtractor(_, index) {
  return index.toString()
}

const _viewabilityConfig = { itemVisiblePercentThreshold: 50 }

// import React from "react"
// import { FlatList } from "react-native"
// import CarouselImage from "./Image"

// export default function ImageList({
//   images,
//   layout,
//   onLayoutChange,
//   imageProps,
//   ...rest
// }) {
//   function renderItem({ item, index }) {
//     return (
//       <CarouselImage
//         key={index}
//         containerStyle={{
//           width: layout.width,
//           height: layout.height,
//           marginRight: index + 1 === images.length ? 0 : 5
//         }}
//         source={{ uri: item.uri }}
//         {...imageProps}
//       />
//     )
//   }

//   return (
//     <FlatList
//       data={images}
//       keyExtractor={_keyExtractor}
//       renderItem={renderItem}
//       onLayout={onLayoutChange}
//       horizontal
//       {...rest}
//     />
//   )
// }

// ImageList.defaultProps = { imageProps: {} }

// function _keyExtractor(_, index) {
//   return index.toString()
// }
