import React from "react"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPort from "@app-hooks/useViewPort"

export default function ProfileScreen(props) {
  const { vw } = useViewPort()

  return (
    <Layout.Screen>
      <Profile.Initialize>
        <Layout.Screen.Separator flexValue={0.53}>
          <Profile.Banner fontScale={vw(5)} />
        </Layout.Screen.Separator>
        <Layout.Screen.Separator flexValue={0.47}>
          <Profile.Body fontScale={vw(3)} />
        </Layout.Screen.Separator>
      </Profile.Initialize>
    </Layout.Screen>
  )
}
