import React, { useState } from "react"
import { ScrollView } from "react-native"
import Layout from "@components/layout"
import Profile from "@components/profile"
import useViewPort from "@hooks/useViewPort"
import { bannerData, mainTechsData, iconIdsToCategoryIdsMap } from "./utils"

export default function ProfileScreen(props) {
  const [activeIconId, setActiveIconId] = useState("")
  const [sectionId, setSectionId] = useState("")

  const { vw } = useViewPort()

  const changeActiveSectionAndIconId = (iconId) => {
    setActiveIconId((prevId) => (prevId === iconId ? "" : iconId))
    if (sectionId === iconId) setSectionId("")
    else setSectionId(iconIdsToCategoryIdsMap[iconId])
  }

  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.35}>
        <Profile.Banner
          content={bannerData[sectionId]?.[activeIconId]}
          activeIconId={activeIconId}
          fontScale={vw(5)}
        />
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.65}>
        <ScrollView style={{ width: "100%" }}>
          <Profile.MainTechs
            title={mainTechsData.title}
            icons={mainTechsData.icons}
            activeIconId={activeIconId}
            onIconPress={changeActiveSectionAndIconId}
            titleSize={vw(7)}
            titleStyle={{ letterSpacing: vw(0.3), paddingHorizontal: vw(3) }}
            iconSize={vw(12)}
          />
        </ScrollView>
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
