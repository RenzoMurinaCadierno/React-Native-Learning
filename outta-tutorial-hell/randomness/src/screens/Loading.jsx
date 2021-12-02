import React from "react"
import { ActivityIndicator } from "react-native"
import Layout from "@app-components/layout"
import colors from "@app-constants/colors"
DO ANIMATED loading message
export default function Initialize({ message, ...rest}) {
    return (
      <Layout.Screen>
        <ActivityIndicator size="large" color={colors.main.SECONDARY} />
      </Layout.Screen>
    )
  }

