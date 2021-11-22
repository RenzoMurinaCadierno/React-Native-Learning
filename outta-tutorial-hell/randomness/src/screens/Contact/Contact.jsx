import React from "react"
import Layout from "@app-components/layout"
import Contact from "@app-components/contact"
import useViewPortContext from "@app-hooks/useViewPortContext"
import { Device } from "@app-utils/functions"

export default function ContactScreen() {
  const { vw } = useViewPortContext()

  return (
    <Layout.Screen>
      <Contact.Body fontScale={Device.isSmall() ? vw(8) : vw(6.5)} />
      <Contact.Toast fontScale={vw(5)} />
    </Layout.Screen>
  )
}
