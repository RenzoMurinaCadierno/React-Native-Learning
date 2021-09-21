import React from "react"
import Overlay from "./Overlay"
import Screen from "./Screen/Screen"
import Separator from "./Screen/Separator"

function ComposedScreen(props) {
  return <Screen {...props} />
}

ComposedScreen.Separator = Separator

const Layout = { Overlay, Screen: ComposedScreen }

export default Layout
