import React from "react"
import AppPressable from "../Pressable/Root"
import Base from "./Base"

export default function TextPressable({ containerProps, ...rest }) {
  return (
    <AppPressable {...containerProps}>
      <Base {...rest} />
    </AppPressable>
  )
}

TextPressable.defaultProps = { containerProps: {} }
