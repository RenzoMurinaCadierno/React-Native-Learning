import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { useDispatch } from "react-redux"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import useViewPort from "@app-hooks/useViewPort"
import * as profileActionTypes from "@app-store/actions/profile"

export default function ProfileScreen(props) {
  const [activeIconId, setActiveIconId] = useState("")
  const { vw } = useViewPort()
  const dispatch = useDispatch()

  const changeActiveIconId = (iconId) => {
    setActiveIconId((prevSt) => (prevSt === iconId ? "" : iconId))
  }

  useEffect(() => {
    dispatch(profileActionTypes.initializeDataInStore())
  }, [])

  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.35}>
        <Profile.Banner activeIconId={activeIconId} fontScale={vw(5)} />
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.65}>
        <ScrollView style={{ width: "100%" }}>
          <Profile.MainTechs
            activeIconId={activeIconId}
            onIconPress={changeActiveIconId}
            titleSize={vw(7)}
            titleStyle={{ letterSpacing: vw(0.3), paddingHorizontal: vw(3) }}
            iconSize={vw(12)}
          />
        </ScrollView>
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
