import React from "react"
import { Text } from "react-native"
import Layout from "@app-components/layout"
import useViewPort from "@app-hooks/useViewPort"

export default function ContactScreen(props) {
  const { vw } = useViewPort()

  return (
    <Layout.Screen>
      <Text>asd</Text>
    </Layout.Screen>
  )
}
