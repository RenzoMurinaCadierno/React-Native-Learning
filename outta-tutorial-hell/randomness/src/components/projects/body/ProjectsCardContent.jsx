import React, { useState } from "react"
import { Animated } from "react-native"
import ProjectsCardActions from "./ProjectsCardActions"
import UI from "@app-components/UI"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"

export default function ProjectsCardContentRoot({ title, ...rest }) {
  const { vh } = useViewPortContext()
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <UI.Card.Text.Title onPress={() => setExpanded((prevSt) => !prevSt)}>
        {title}
      </UI.Card.Text.Title>
      <ProjectsCardContentExpandable
        active={expanded}
        maxHeight={vh(43.5)}
        title={title}
        {...rest}
      />
    </>
  )
}

function ProjectsCardContentExpandable({
  active,
  maxHeight,
  title,
  subtitle,
  actions,
  images
}) {
  const animatedValue = useLinearAnimatedValue({
    active,
    activeAnimation: animations.texts.shrink.wrapper.IN,
    inactiveAnimation: animations.texts.shrink.wrapper.OUT
  })

  return (
    <Animated.View
      style={{
        height: interpolate(animatedValue, [0, maxHeight]),
        transform: [{ scale: animatedValue }],
        justifyContent: "space-evenly"
      }}
    >
      <UI.Card.Text.Subtitle>{subtitle}</UI.Card.Text.Subtitle>
      <UI.Carousel images={images} containerStyle={{ marginTop: 7 }} />
      <ProjectsCardActions actions={actions} title={title} />
    </Animated.View>
  )
}
