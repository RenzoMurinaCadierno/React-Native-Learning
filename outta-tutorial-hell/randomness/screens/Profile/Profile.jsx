import React from "react"
import { StyleSheet } from "react-native"
import Layout from "../../components/layout"
import Profile from "../../components/profile"
import useViewPort from "../../hooks/useViewPort"
import { mainTechsData } from "./utils"

export default function ProfileScreen(props) {
  const { vw } = useViewPort()
  const styles = _styles(vw)

  return (
    <Layout.Screen>
      <Profile.Techs.Section
        title={mainTechsData.title}
        icons={mainTechsData.icons}
        titleSize={vw(7)}
        titleStyle={styles.title}
        iconSize={vw(12)}
      />
    </Layout.Screen>
  )
}

const _styles = (vw) =>
  StyleSheet.create({
    title: {
      letterSpacing: vw(0.3),
      paddingHorizontal: vw(3)
    }
  })
