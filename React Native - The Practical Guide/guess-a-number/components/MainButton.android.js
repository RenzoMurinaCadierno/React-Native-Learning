import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native"
import colors from "../constants/colors"

export default function MainButton({
  children,
  onPress,
  styles = {},
  ...rest
}) {
  let ButtonComponent = TouchableOpacity

  // 'ripple' effect was introduced in android v.21
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback
  }

  return (
    <View style={[_styles.container, styles.container]}>
      <ButtonComponent
        activeOpacity={0.4}
        style={styles.button}
        onPress={onPress}
        {...rest}
      >
        <View style={[_styles.view, styles.view]}>
          <Text style={[_styles.text, styles.text]}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  )
}

const _styles = StyleSheet.create({
  // make 'ripple' effect do not exceed boundaries of visible button
  container: { borderRadius: 25, overflow: "hidden" },
  view: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  text: { color: "white", fontFamily: "open-sans", fontSize: 18 }
})
