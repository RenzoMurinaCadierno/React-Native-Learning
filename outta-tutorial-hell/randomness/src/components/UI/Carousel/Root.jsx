import React, { useCallback, useState } from "react"
import { View } from "react-native"
import Chip from "./Chip"
import ImageList from "./ImageList"

export default function Root({ images, chipProps, ...rest }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeChipIndex = useCallback((nextIndex) => {
    setCurrentIndex((prevIdx) =>
      nextIndex === undefined ? prevIdx : nextIndex + 1
    )
  }, [])

  return (
    <View style={{ position: "relative" }}>
      <ImageList images={images} onNextImageIndex={changeChipIndex} {...rest} />
      <Chip index={currentIndex} length={images.length} />
    </View>
  )
}

Root.defaultProps = { chipProps: {} }
