import React from "react"
import { StyleSheet } from "react-native"
import IconWithCircle from "../Icon/IconWithCircle"
import useLoopingAnimatedValue from "@app-hooks/useLoopingAnimatedValue"
import colors from "@app-constants/colors"

export default function DraggableItemDemo({ containerStyle, ...rest }) {
  // const val = useLoopingAnimatedValue({ active: ready })

  return (
    <IconWithCircle
      {...rest}
      type={null}
      containerStyle={{ ..._styles.container, ...containerStyle }}
      color={colors.main.PRIMARY}
      borderColor={colors.main.PRIMARY}
      backgroundColor={colors.accent.PRIMARY_ALPHA(0.5)}
      enableAnimation
    />
  )
}
go on with this
const _styles = StyleSheet.create({ container: { position: "absolute" } })
