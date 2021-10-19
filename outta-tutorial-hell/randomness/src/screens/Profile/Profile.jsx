import React, { useState, useCallback } from "react"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPort from "@app-hooks/useViewPort"

export default function ProfileScreen(props) {
  const [activeIconId, setActiveIconId] = useState("")
  const { vw } = useViewPort()

  const changeActiveIconId = useCallback((iconId) => {
    setActiveIconId((prevSt) => (prevSt === iconId ? "" : iconId))
  }, [])

  return (
    <Layout.Screen>
      <Profile.Initialize>
        <Layout.Screen.Separator flexValue={0.53}>
          <Profile.Banner activeIconId={activeIconId} fontScale={vw(5)} />
        </Layout.Screen.Separator>
        <Layout.Screen.Separator flexValue={0.47}>
          <Profile.Body
            activeIconId={activeIconId}
            onIconPress={changeActiveIconId}
            fontScale={vw(3)}
          />
        </Layout.Screen.Separator>
      </Profile.Initialize>
    </Layout.Screen>
  )
}
