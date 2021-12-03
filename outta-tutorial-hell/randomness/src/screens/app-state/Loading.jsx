import React, { useEffect, useRef, useState } from "react"
import { StyleSheet } from "react-native"
import Layout from "@app-components/layout"
import UI from "@app-components/UI"

export default function Loading({
  children,
  marqueeText,
  containerProps,
  textChangeIntervalLength,
  ...rest
}) {
  return (
    <Layout.Screen {...containerProps}>
      <LoadingTexts interval={textChangeIntervalLength} />
      <UI.Marquee containerStyle={_styles.marqueeContainer} {...rest}>
        Loading
      </UI.Marquee>
    </Layout.Screen>
  )
}

Loading.defaultProps = {
  marqueeText: "Loading",
  textChangeIntervalLength: 4500,
  containerProps: {}
}

const _styles = StyleSheet.create({
  marqueeContainer: { position: "absolute", bottom: 15 }
})

function LoadingTexts({ interval }) {
  const texts = useRef([
    "Loading assets",
    "Fetching database",
    "Caching",
    "Ensuring safe exits",
    "Praying for no crashes",
    "Ready!"
  ]).current
  const [text, setText] = useState(texts[0])

  useEffect(() => {
    let currentTextsIndex = 0

    const changeTextsIntervalId = setInterval(() => {
      if (currentTextsIndex >= texts.length - 1) {
        return clearInterval(changeTextsIntervalId)
      }

      setText(texts[++currentTextsIndex])
    }, interval / text.length)

    return () => clearInterval(changeTextsIntervalId)
  }, [])

  return <UI.LoadingIndicator>{text}</UI.LoadingIndicator>
}
