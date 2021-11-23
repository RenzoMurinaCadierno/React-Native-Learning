import React from "react"
import Layout from "@app-components/layout"
import Contact from "@app-components/contact"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

export default function ContactScreen() {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()

  return (
    <Layout.Screen>
      <Contact.Body
        fontScale={breakpoints.select({ sm: vw(8), any: vw(6.5) })}
      />
      <Contact.Toast fontScale={vw(5)} />
    </Layout.Screen>
  )
}
