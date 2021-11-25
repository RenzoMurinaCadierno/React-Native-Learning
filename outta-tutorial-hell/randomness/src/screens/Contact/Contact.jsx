import React from "react"
import Layout from "@app-components/layout"
import Contact from "@app-components/contact"
import Context from "@app-context"

export default function ContactScreen() {
  return (
    <Layout.Screen>
      <Context.Contact.Body.Provider>
        <Contact.Body />
      </Context.Contact.Body.Provider>
      <Context.Contact.Toast.Provider>
        <Contact.Toast />
      </Context.Contact.Toast.Provider>
    </Layout.Screen>
  )
}
