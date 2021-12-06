import React from "react"
import { View } from "react-native"
import { useBreakpoints } from "@app-hooks"

export default function SectionListFooter() {
  const breakpoints = useBreakpoints()

  return (
    <View style={{ marginBottom: breakpoints.select({ sm: 10, any: 20 }) }} />
  )
}
