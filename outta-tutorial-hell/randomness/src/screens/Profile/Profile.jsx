import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPort from "@app-hooks/useViewPort"
import * as profileActions from "@app-store/actions/profile"

export default function ProfileScreen(props) {
  const [activeIconId, setActiveIconId] = useState("")
  const { vw } = useViewPort()
  const dispatch = useDispatch()

  const changeActiveIconId = (iconId) => {
    setActiveIconId((prevSt) => (prevSt === iconId ? "" : iconId))
  }

  useEffect(() => {
    dispatch(profileActions.initializeDataInStore())
  }, [])

  return (
    <Layout.Screen>
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
    </Layout.Screen>
  )
}
