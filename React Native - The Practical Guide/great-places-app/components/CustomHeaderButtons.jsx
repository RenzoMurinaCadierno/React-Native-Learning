import React from "react"
import { Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "./CustomHeaderButton"

export default function CustomHeaderButtons({ title, iconName, onPress }) {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName={
          Platform.OS === "android" ? `md-${iconName}` : `ios-${iconName}`
        }
        {...{ title, onPress }}
      />
    </HeaderButtons>
  )
}
