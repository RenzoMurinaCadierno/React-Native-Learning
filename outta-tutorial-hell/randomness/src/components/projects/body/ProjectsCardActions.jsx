import React from "react"
import UI from "@app-components/UI"
import * as projectsConstants from "@app-constants/sections/projects"
import { mayOpenUrl } from "@app-utils/functions"
import colors from "@app-constants/colors"

export default function ProjectsCardActions({
  actions,
  containerProps,
  ...rest
}) {
  return (
    <UI.Card.Actions style={{ borderRadius: 10 }} {...containerProps}>
      {Object.entries(actions).map(([actionId, actionUrlString]) => (
        <UI.Card.Actions.Icon
          key={actionId}
          actionTextProps={{
            containerProps: { color: colors.background.SECONDARY }
          }}
          {...actionIconsProps[actionId](actionUrlString)}
          {...rest}
        />
      ))}
    </UI.Card.Actions>
  )
}

ProjectsCardActions.defaultProps = { actions: {}, containerProps: {} }

const { ALLOW_SHARE, REPOSITORY, WEB_APP } = projectsConstants.card.actions

const actionIconsProps = {
  [ALLOW_SHARE]: () => ({
    id: ALLOW_SHARE,
    name: "share-social",
    actionText: "Tap to share",
    onActionTextPress: () => console.log("share")
  }),
  [REPOSITORY]: (url) => ({
    id: REPOSITORY,
    name: "logo-github",
    actionText: "Tap to open repo",
    onActionTextPress: () => mayOpenUrl(url)
  }),
  [WEB_APP]: (url) => ({
    id: WEB_APP,
    name: "code-slash",
    actionText: "Tap to open example",
    onActionTextPress: () => mayOpenUrl(url)
  })
}
