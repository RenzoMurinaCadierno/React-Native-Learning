import React from "react"
import { View, StyleSheet } from "react-native"
import * as sharedStyles from "../constants/styles"

export default function Card({ children, style }) {
  return <View style={[_styles.container, style]}>{children}</View>
}

const _styles = StyleSheet.create({ container: sharedStyles.CARD_SHADOW })
