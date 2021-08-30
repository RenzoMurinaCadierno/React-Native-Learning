import React from "react"
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native"

export default function TouchableComponent(props) {
  return Platform.OS === "android" && Platform.Version >= 21 ? (
    <TouchableNativeFeedback {...props} />
  ) : (
    <TouchableOpacity {...props} />
  )
}
