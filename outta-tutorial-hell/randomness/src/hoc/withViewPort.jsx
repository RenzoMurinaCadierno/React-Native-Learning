import React from "react"
import { useViewPort } from "@app-hooks"

export default function withViewPort(WrappedComponent) {
  return function WithViewPort(props) {
    const viewPort = useViewPort()

    return <WrappedComponent {...props} {...viewPort} />
  }
}
