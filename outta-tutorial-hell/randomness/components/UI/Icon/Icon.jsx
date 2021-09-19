import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import colors from "../../../constants/colors"
import Shadow from "./Shadow"

export default function Icon({
  containerStyle,
  iconStyle,
  size,
  color,
  elevate,
  ...rest
}) {
  const styles = _styles(size)

  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons size={size} color={color} style={iconStyle} {...rest} />
      {elevate && (
        <Shadow width={size / 3} height={size / 5} style={styles.shadow} />
      )}
    </View>
  )
}

Icon.defaultProps = { color: colors.PRIMARY, size: 18 }

const _styles = (size) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      margin: size / 8,
      position: "relative"
    },
    shadow: {
      position: "absolute",
      bottom: -(size / 4),
      borderRadius: size / 2,
      elevation: 4
    }
  })
