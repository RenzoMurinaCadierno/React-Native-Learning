import React, { useCallback, useState } from "react"
import { StyleSheet, View } from "react-native"
import Chip from "./Chip"
import ImageList from "./ImageList"

export default function Root({
  images,
  chipProps,
  containerProps,
  containerStyle,
  ...rest
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeChipIndex = useCallback((nextIndex) => {
    setCurrentIndex((prevIdx) =>
      nextIndex === undefined ? prevIdx : nextIndex + 1
    )
  }, [])

  return (
    <View style={[_styles.container, containerStyle]} {...containerProps}>
      <ImageList images={images} onNextImageIndex={changeChipIndex} {...rest} />
      {Boolean(currentIndex) && (
        <Chip index={currentIndex} length={images.length} {...chipProps} />
      )}
    </View>
  )
}

Root.defaultProps = { containerProps: {}, chipProps: {} }

const _styles = StyleSheet.create({ container: { position: "relative" } })
