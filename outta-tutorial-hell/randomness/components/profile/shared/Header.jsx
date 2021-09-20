import React from "react"
import Layout from "../../layout"
import UI from "../../UI"
import colors from "../../../constants/colors"

export default function Header({ title, titleSize, titleProps, overlayProps }) {
  return (
    <Layout.Overlay {...overlayProps}>
      <UI.Text
        color={colors.SECONDARY}
        family="bold"
        size={titleSize}
        {...titleProps}
      >
        {title}
      </UI.Text>
    </Layout.Overlay>
  )
}

Header.defaultProps = { overlayProps: {}, titleProps: {} }
