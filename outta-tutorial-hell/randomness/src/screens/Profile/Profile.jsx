import React from "react"
import Layout from "@app-components/layout"
import Profile from "@app-components/profile"
import Context from "@app-context"

export default function ProfileScreen() {
  return (
    <Layout.Screen>
      <Layout.Screen.Separator flexValue={0.53}>
        <Context.Profile.Banner.Provider>
          <Profile.Banner />
        </Context.Profile.Banner.Provider>
      </Layout.Screen.Separator>
      <Layout.Screen.Separator flexValue={0.47}>
        <Context.Profile.Body.Provider>
          <Profile.Body />
        </Context.Profile.Body.Provider>
        <Context.Toast.Provider>
          <Profile.Toast />
        </Context.Toast.Provider>
      </Layout.Screen.Separator>
    </Layout.Screen>
  )
}
