import React from "react"
import { StyleSheet, Animated } from "react-native"
import ToastText from "./Text"
import { Color } from "@app-utils/functions"

export default function Body({
  animatedValue,
  viewPort,
  fontScale,
  type,
  borderColor,
  backgroundColor,
  textColor,
  style,
  children,
  containerProps,
  containerStyle,
  ...rest
}) {
  const dynamicStyles = _createDynamicStyles(
    type,
    borderColor,
    backgroundColor,
    textColor,
    viewPort,
    animatedValue
  )

  return (
    <Animated.View
      style={[_styles.container, dynamicStyles.container, containerStyle]}
      {...containerProps}
    >
      <ToastText
        size={fontScale}
        style={[dynamicStyles.text.style, style]}
        {...dynamicStyles.text.props}
        {...rest}
      >
        {children}
      </ToastText>
    </Animated.View>
  )
}

Body.defaultProps = { containerProps: {} }

const _styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

function _createDynamicStyles(
  type,
  borderColor,
  backgroundColor,
  textColor,
  viewPort,
  animatedValue
) {
  return {
    container: {
      bottom: viewPort?.vh?.(7) || 50,
      paddingHorizontal: viewPort?.vw?.(3.5) || 12,
      paddingVertical: viewPort?.vw?.(2.5) || 6,
      borderWidth: viewPort?.vw?.(0.75) || 3,
      borderRadius: viewPort?.vw?.(8) || 20,
      borderColor: Color.getByTypeOrProp(type, borderColor),
      backgroundColor: backgroundColor
        ? Color.getByTypeOrProp(type, backgroundColor, "accent")
        : Color.getRgbaByType("CONTRAST", {
            variantGroup: "background",
            alphaValue: 0.3
          }),
      opacity: animatedValue,
      transform: [{ scaleX: animatedValue }]
    },
    text: {
      style: {
        color: Color.getByTypeOrProp(type, textColor)
      },
      props: {
        shadowColor: Color.getShadowForType(type)
      }
    }
  }
}
