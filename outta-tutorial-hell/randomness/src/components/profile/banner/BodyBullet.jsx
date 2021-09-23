import React from "react"
import { View, Text, StyleSheet } from "react-native"
import UI from "@components/UI"
import colors from "@constants/colors"

export default function BodyBullet({ fontScale }) {
  return <UI.Icon.WithCircle name="bookmark" size={fontScale} />
}

const _styles = StyleSheet.create({
  wrapper: {
    width: 50,
    height: 50,
    padding: 2,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
