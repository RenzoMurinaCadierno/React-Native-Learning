import React from "react"
import { StyleSheet } from "react-native"
import Layout from "../../components/layout"
import Profile from "../../components/profile"
import useViewPort from "../../hooks/useViewPort"

export default function ProfileScreen(props) {
  const { vw } = useViewPort()
  const styles = _styles(vw)

  return (
    <Layout.Screen>
      <Profile.Techs.Section
        title="Main techs"
        names={[
          "logo-html5",
          "logo-css3",
          "logo-javascript",
          "logo-react",
          "logo-github"
        ]}
        textSize={vw(7)}
        titleStyle={styles.title}
        iconSize={vw(13)}
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
