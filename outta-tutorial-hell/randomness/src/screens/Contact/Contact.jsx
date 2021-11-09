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
      <Asd vw={vw} />
    </Layout.Screen>
  )
}

function Asd({ vw }) {
  const [a, A] = React.useState("a")

  const B = () => A((a) => a + "a")

  return (
    <UI.Toast onPressText={B} refreshTimeoutOn={a} fontScale={vw(5)}>
      {a}
    </UI.Toast>
  )
}
add toast texts to redux, link to enable refresh