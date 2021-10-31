import React from "react"
import Layout from "@app-components/layout"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function SectionListHeader({
  title,
  fontScale,
  titleProps,
  overlayProps
}) {
  return (
    <Layout.Overlay {...overlayProps}>
      <UI.Text
        color={colors.main.SECONDARY}
        type="semi-bold"
        size={fontScale}
        elevation={fontScale / 7}
        shadowRadius={fontScale / 2}
        shadowColor={colors.main.PRIMARY}
        {...titleProps}
      >
        {title}
      </UI.Text>
    </Layout.Overlay>
  )
}

SectionListHeader.defaultProps = { overlayProps: {}, titleProps: {} }
