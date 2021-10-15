import React from "react"
import { CardContextProvider } from "./context"
import Container from "./Container"

export default function Root(props) {
  return (
    <CardContextProvider>
      <Container {...props} />
    </CardContextProvider>
  )
}
