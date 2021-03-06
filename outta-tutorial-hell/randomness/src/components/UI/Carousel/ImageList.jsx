import React, { useCallback } from "react"
import { FlatList } from "react-native"
import CarouselImage from "./Image"
import { useLayout } from "@app-hooks"

function ImageList({
  images,
  onNextImageIndex,
  onLayout,
  imageProps,
  ...rest
}) {
  const [layout, onLayoutChange] = useLayout(onLayout)

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

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
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

ImageList.defaultProps = { images: [], imageProps: {} }

export default React.memo(ImageList)

function _keyExtractor(_, index) {
  return index.toString()
}

const _viewabilityConfig = { itemVisiblePercentThreshold: 50 }
