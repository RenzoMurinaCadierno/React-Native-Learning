import React from "react"
import UI from "@app-components/UI"
import { Link } from "@app-utils/functions"
import { colors, sections } from "@app-constants"

export default function ProjectsCardActions({
  actions,
  title,
  fontScale,
  containerProps,
  ...rest
}) {
  return (
    <UI.Card.Actions {...containerProps}>
      {Object.entries(actions).map(([actionId, actionUrlString]) => (
        <UI.Card.Actions.Icon
          key={actionId}
          size={fontScale * 1.525}
          actionTextProps={{
            size: fontScale * 0.965,
            containerProps: {
              color: colors.background.SECONDARY
            }
          }}
          {..._actionIconsProps[actionId](actionUrlString, title)}
          {...rest}
        />
      ))}
    </UI.Card.Actions>
  )
}

ProjectsCardActions.defaultProps = { actions: {}, containerProps: {} }

const { SHARE_LINK, REPOSITORY, WEB_APP } = sections.projects.card.actions

const _actionIconsProps = {
  [SHARE_LINK]: (url, title) => ({
    id: SHARE_LINK,
    name: "share-social",
    actionText: "Tap to share",
    onActionTextPress: () =>
      Link.mayShare(
        url,
        `Share ${title} repository link`,
        `Could not share ${title} repository link`
      )
  }),
  [REPOSITORY]: (url) => ({
    id: REPOSITORY,
    name: "logo-github",
    actionText: "Tap to open repo",
    onActionTextPress: () => Link.mayOpenUrl(url)
  }),
  [WEB_APP]: (url) => ({
    id: WEB_APP,
    name: "code-slash",
    actionText: "Tap to open app",
    onActionTextPress: () => Link.mayOpenUrl(url)
  })
}
