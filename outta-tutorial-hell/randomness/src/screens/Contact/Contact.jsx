import React from "react"
import Layout from "@app-components/layout"
import Contact from "@app-components/contact"
import useViewPortContext from "@app-hooks/useViewPortContext"
import UI from "@app-components/UI"

export default function ContactScreen() {
  const { vw } = useViewPortContext()

  return (
    <Layout.Screen>
      <Contact.Body fontScale={vw(7)} />
      <UI.Toast fontScale={vw(4)} />
    </Layout.Screen>
  )
}
