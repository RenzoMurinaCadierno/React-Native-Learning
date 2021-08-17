import React from "react"
import { Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "./CustomHeaderButton"

export default function CustomHeaderButtons({ onPress, title, iconName }) {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title={title}
        iconName={
          Platform.OS === "android" ? `md-${iconName}` : `ios-${iconName}`
        }
        onPress={onPress}
      />
    </HeaderButtons>
  )
}
