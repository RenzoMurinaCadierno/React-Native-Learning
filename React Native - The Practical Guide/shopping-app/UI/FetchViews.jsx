import React from "react"
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native"
import * as sharedStyles from "../constants/styles"
import colors from "../constants/colors"

export default function FetchViews({
  errorMsg,
  errorButtonProps,
  emptyResponseMsg,
  isLoading,
  responseGate,
  children
}) {
  if (errorMsg) {
    return <Error message={errorMsg} buttonProps={errorButtonProps} />
  }

  if (isLoading) return <Loading />

  if (!isLoading && !Boolean(responseGate)) {
    return <EmptyResponse message={emptyResponseMsg} />
  }

  return children
}

export function Loading() {
  return (
    <View style={_styles.container}>
      <ActivityIndicator size="large" color={colors.PRIMARY} />
    </View>
  )
}

export function Error({ message, buttonProps }) {
  return (
    <View style={_styles.container}>
      <Text>{message}</Text>
      {buttonProps && <Button color={colors.PRIMARY} {...buttonProps} />}
    </View>
  )
}

export function EmptyResponse({ message }) {
  return (
    <View style={_styles.container}>
      <Text>{message}</Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: sharedStyles.STRETCH_AND_CENTER
})
