import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, StyleSheet, Button } from "react-native"
import IconList from "./IconList"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import { default as sharedStyles } from "@app-constants/styles"

export default function Root({ icons, flexValue, fontScale, style }) {
  const [a, setA] = useState(false)

  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.main.SECONDARY_ALPHA(0.2)]}
      style={[_styles.container, { flex: flexValue }, style]}
    >
      <IconList icons={icons} fontScale={fontScale} />
      {/* <UI.Icon.WithSpring active={a} name="logo-react" size={fontScale} /> */}
      {/* <Button title="HOP" onPress={() => setA((a) => !a)} /> */}
    </LinearGradient>
  )
}

const _styles = StyleSheet.create({
  container: {
    ...sharedStyles.borderElevation.RIGHT,
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  }
  // scrollViewContainer: { width: "100%" },
  // scrollViewContentContainer:
})
