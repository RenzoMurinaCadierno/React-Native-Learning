import React from "react"
import { View } from "react-native"
import MarqueeText from "./Text"
import { useViewPort, useMultiLoopingAnimatedValues } from "@app-hooks"
import animations from "@app-constants/animations"

export default function Root({
  active,
  children,
  translateOutputRange,
  activeSequence,
  useLoopingAnimatedValueProps,
  containerStyle,
  ...rest
}) {
  const characters = children.split("")
  const { vw } = useViewPort()
  const animatedValues = useMultiLoopingAnimatedValues({
    active,
    activeSequences: characters.map(() => activeSequence),
    delayBetweenAnimations: 200,
    ...useLoopingAnimatedValueProps
  })

  return (
    <View style={[{ flexDirection: "row" }, containerStyle]}>
      {animatedValues.map((animatedValue, i) => (
        <MarqueeText
          key={i}
          size={vw(6)}
          translateValue={animatedValue}
          translateOutputRange={translateOutputRange || [-vw(65), vw(65)]}
          {...rest}
        >
          {characters[children.length - 1 - i]}
        </MarqueeText>
      ))}
    </View>
  )
}

Root.defaultProps = {
  active: true,
  children: "Example",
  activeSequence: animations.texts.marquee.ACTIVE_SEQUENCE,
  useLoopingAnimatedValueProps: {}
}
