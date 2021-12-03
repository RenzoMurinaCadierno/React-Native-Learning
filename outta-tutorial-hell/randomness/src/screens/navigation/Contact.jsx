import React from "react"
import Layout from "@app-components/layout"
import ScreenComponents from "@app-components/screens"
import Context from "@app-context"

export default function ContactScreen() {
  return (
    <Layout.Screen>
      <Context.Contact.Body.Provider>
        <ScreenComponents.Contact.Body />
      </Context.Contact.Body.Provider>
      <Context.Toast.Provider>
        <ScreenComponents.Contact.Toast />
      </Context.Toast.Provider>
    </Layout.Screen>
  )
}
