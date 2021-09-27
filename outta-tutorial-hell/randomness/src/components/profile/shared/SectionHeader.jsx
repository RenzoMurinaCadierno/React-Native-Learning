import React from "react"
import Layout from "@app-components/layout"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"

export default function Header({ title, titleSize, titleProps, overlayProps }) {
  return (
    <Layout.Overlay {...overlayProps}>
      <UI.Text
        color={colors.SECONDARY}
        type="bold"
        size={titleSize}
        elevation={titleSize / 7}
        shadowRadius={titleSize / 2}
        shadowColor={colors.PRIMARY}
        {...titleProps}
      >
        {title}
      </UI.Text>
    </Layout.Overlay>
  )
}

Header.defaultProps = { overlayProps: {}, titleProps: {} }
