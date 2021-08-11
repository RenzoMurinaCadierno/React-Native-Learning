import React from "react"
import { Platform } from "react-native"
import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"

import { colors } from "../constants/colors"

export default function CustomHeaderButton(props) {
  // IconComponent expects an import from @expo/vector-icons!
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "iOS" ? colors.PRIMARY : "white"}
    />
  )
}
