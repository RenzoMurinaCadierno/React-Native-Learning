import React from "react"
import { ScrollView } from "react-native"
import Layout from "@components/layout"
import Profile from "@components/profile"
import useViewPort from "@hooks/useViewPort"
import { mainTechsData } from "./utils"

export default function ProfileScreen(props) {
  const { vw } = useViewPort()

  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.35}>
        <Profile.Banner fontScale={vw(5)} />
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.65}>
        <ScrollView style={{ width: "100%" }}>
          <Profile.MainTechs
            title={mainTechsData.title}
            icons={mainTechsData.icons}
            titleSize={vw(7)}
            titleStyle={{ letterSpacing: vw(0.3), paddingHorizontal: vw(3) }}
            iconSize={vw(12)}
          />
        </ScrollView>
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
