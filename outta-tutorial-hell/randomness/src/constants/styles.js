import { StyleSheet } from "react-native"

const defaultElevation = {
  elevation: 1,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: "transparent"
}

const styles = {
  FLEX_CENTER: { flex: 1, alignItems: "center", justifyContent: "center" },
  ELEVATION_SUBTLE: defaultElevation,
  borderElevation: {
    RIGHT: { width: StyleSheet.hairlineWidth, ...defaultElevation }
  }
}

export default styles
