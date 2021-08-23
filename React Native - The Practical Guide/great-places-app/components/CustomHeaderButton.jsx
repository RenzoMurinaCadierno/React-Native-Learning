import React from "react"
import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"
import colors from "../constants/colors"
import { Platform } from "react-native"

export default function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.PRIMARY}
    />
  )
}
