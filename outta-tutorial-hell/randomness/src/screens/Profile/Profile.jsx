import React from "react"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

export default function ProfileScreen() {
  const { vw, vh } = useViewPortContext()
  const breakpoints = useBreakpoints()

  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.53}>
        <Profile.Banner
          fontScale={breakpoints.select({ sm: vw(5.5), any: vw(5) })}
          headerShrinkThereshold={vh(50)}
        />
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.47}>
        <Profile.Body
          fontScale={breakpoints.select({ sm: vw(3.5), any: vw(3) })}
        />
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
