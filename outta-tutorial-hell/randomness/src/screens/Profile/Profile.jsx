import React from "react"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPortContext from "@app-hooks/useViewPortContext"

export default function ProfileScreen() {
  const { vw } = useViewPortContext()

  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.53}>
        <Profile.Banner fontScale={vw(5)} />
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.47}>
        <Profile.Body fontScale={vw(3)} />
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
