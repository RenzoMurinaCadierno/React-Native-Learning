import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import AppText from "../Text/Base"
import useViewPortContext from "@app-hooks/useViewPortContext"
import colors from "@app-constants/colors"

export function Title({ children, ...rest }) {
  return (
    <CardText role="title" {...rest}>
      {children}
    </CardText>
  )
}

export function Subtitle({ children, ...rest }) {
  return (
    <CardText role="subtitle" {...rest}>
      {children}
    </CardText>
  )
}

export default function CardText({
  role,
  fontScale,
  children,
  style,
  onPress,
  containerProps,
  containerStyle,
  ...rest
}) {
  const { vw } = useViewPortContext()
  const Wrapper = onPress ? Pressable : View
  const textProps = _getTextPropsForRole(role, fontScale, vw)

  return (
    <Wrapper style={[_styles.container, containerStyle]} {...containerProps}>
      <AppText {...textProps} style={[_styles[role], style]} {...rest}>
        {children}
      </AppText>
    </Wrapper>
  )
}

CardText.defaultProps = {
  role: "default",
  containerProps: {},
  containerStyle: {}
}

const _styles = StyleSheet.create({
  container: { marginVertical: 2 },
  title: {
    letterSpacing: 0.75,
    textTransform: "uppercase",
    textAlign: "right"
  },
  subtitle: {
    letterSpacing: 0.5,
    textAlign: "right"
  },
  default: {
    letterSpacing: 0.75,
    textTransform: "uppercase"
  }
})

function _getTextPropsForRole(role, fontScale, vw) {
  switch (role.toLowerCase()) {
    case "title":
      return {
        size: fontScale ?? vw(5.5),
        type: "semi-bold-italic",
        color: colors.main.PRIMARY,
        elevation: fontScale ? fontScale / 8 : vw(0.6),
        shadowColor: colors.background.DARK_ALPHA(0.5)
      }
    case "subtitle":
      return {
        size: fontScale ?? vw(4.5),
        type: "regular-italic",
        color: colors.main.SECONDARY,
        elevation: fontScale ? fontScale / 4 : vw(0.6),
        shadowColor: colors.background.DARK_ALPHA(0.5)
      }
    default:
      return {
        size: fontScale ?? vw(4.5),
        type: "semi-bold-italic",
        color: colors.main.PRIMARY,
        elevation: fontScale ? fontScale / 8 : vw(0.6),
        shadowColor: colors.background.DARK_ALPHA(0.5)
      }
  }
}
