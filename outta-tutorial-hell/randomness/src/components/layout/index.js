import React from "react"
import Divider from "./Divider/Divider"
import BaseOverlay from "./Overlay/Base"
import PressableOverlay from "./Overlay/Pressable"
import Screen from "./Screen/Screen"
import Separator from "./Screen/Separator"

function ComposedScreen(props) {
  return <Screen {...props} />
}

ComposedScreen.Separator = Separator

function ComposedOverlay(props) {
  return <BaseOverlay {...props} />
}

ComposedOverlay.Pressable = PressableOverlay

const Layout = { Divider, Overlay: ComposedOverlay, Screen: ComposedScreen }

export default Layout
