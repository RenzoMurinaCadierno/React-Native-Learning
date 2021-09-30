import React from "react"
import Divider from "./Divider/Divider"
import Overlay from "./Overlay/Overlay"
import Screen from "./Screen/Screen"
import Separator from "./Screen/Separator"

function ComposedScreen(props) {
  return <Screen {...props} />
}

ComposedScreen.Separator = Separator

const Layout = { Divider, Overlay, Screen: ComposedScreen }

export default Layout
