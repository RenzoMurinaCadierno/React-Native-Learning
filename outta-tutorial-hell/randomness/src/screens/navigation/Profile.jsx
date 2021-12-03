import React from "react"
import Layout from "@app-components/layout"
import ScreenComponents from "@app-components/screens"
import Context from "@app-context"

export default function ProfileScreen() {
  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.53}>
        <Context.Profile.Banner.Provider>
          <ScreenComponents.Profile.Banner />
        </Context.Profile.Banner.Provider>
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.47}>
        <Context.Profile.Body.Provider>
          <ScreenComponents.Profile.Body />
        </Context.Profile.Body.Provider>
        <Context.Toast.Provider>
          <ScreenComponents.Profile.Toast />
        </Context.Toast.Provider>
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
