import React, { useContext, useState } from "react"
import { Animated } from "react-native"
import ProjectsCardActions from "./ProjectsCardActions"
import UI from "@app-components/UI"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"
import { interpolate } from "@app-utils/functions"
import animations from "@app-constants/animations"
import Context from "@app-context"

// keep context in top component to prevent being called each time state changes
// in `ProjectsCardContentStateContainer` (card expands or collapses)
export default function ProjectsCardContentRoot(props) {
  const context = useContext(Context.Projects.Body.Consumable)

  return <ProjectsCardContentStateContainer context={context} {...props} />
}

// separate business logic to prevent disconnects in animated views in
// `ProjectsCardContentExpandable`
function ProjectsCardContentStateContainer({ context, title, ...rest }) {
  const { fontScale, cardMaxHeight } = context
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <UI.Card.Text.Title
        fontScale={fontScale * 1.05}
        onPress={() => setExpanded((prevSt) => !prevSt)}
      >
        {title}
      </UI.Card.Text.Title>
      <ProjectsCardContentExpandable
        active={expanded}
        fontScale={fontScale}
        maxHeight={cardMaxHeight}
        title={title}
        {...rest}
      />
    </>
  )
}

// finally, card expandable content's application logic
function ProjectsCardContentExpandable({
  active,
  fontScale,
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
      <UI.Card.Text.Subtitle fontScale={fontScale}>
        {subtitle}
      </UI.Card.Text.Subtitle>
      <UI.Carousel images={images} containerStyle={{ marginTop: 7 }} />
      <ProjectsCardActions
        actions={actions}
        title={title}
        fontScale={fontScale}
      />
    </Animated.View>
  )
}
