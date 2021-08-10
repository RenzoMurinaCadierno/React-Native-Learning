import React from "react"
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  Text,
  StyleSheet
} from "react-native"

export default function CategoryGridItem({ title, onPress, color }) {
  const Component =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity

  return (
    <View style={_styles.container}>
      <Component style={{ flex: 1 }} onPress={onPress}>
        <View style={[_styles.view, { backgroundColor: color }]}>
          <Text style={_styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Component>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden" // for ripple effect's overflowing issue
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    // for iOS
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // for android
    elevation: 3
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    textAlign: "right"
  }
})
