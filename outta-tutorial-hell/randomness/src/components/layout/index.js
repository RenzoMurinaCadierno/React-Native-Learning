import React from "react"
import Divider from "./Divider/Divider"
import BaseOverlay from "./Overlay/Base"
import OverlayPressable from "./Overlay/Pressable"
import Screen from "./Screen/Screen"
import ScreenSeparator from "./Screen/Separator"
import ScreenPlaceholder from "./Screen/Placeholder"
import ScreenWithMountAnimation from "./Screen/ScreenWithMountAnimation"

function ComposedScreen(props) {
  return <Screen {...props} />
}

ComposedScreen.Separator = ScreenSeparator
ComposedScreen.Placeholder = ScreenPlaceholder
ComposedScreen.WithMountAnimation = ScreenWithMountAnimation

function ComposedOverlay(props) {
  return <BaseOverlay {...props} />
}

ComposedOverlay.Pressable = OverlayPressable

const Layout = { Divider, Overlay: ComposedOverlay, Screen: ComposedScreen }

export default Layout
