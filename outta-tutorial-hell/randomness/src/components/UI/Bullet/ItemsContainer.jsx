import React, { useCallback, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

export default function ItemsContainer({ style, coords, onIconMove, ...rest }) {
  // const [iconCoords, setIconCoords] = useState({x: 0, y: 0 })

  // const updateCoords = useCallback(() => { setIconCoords}, [])
  return (
    <View style={[_styles.container, style]} {...rest}>
      <Text>
        {coords.x.toFixed(2)} - {coords.y.toFixed(2)}
      </Text>
    </View>
  )
}

add bulletitems

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center"
  }
})
