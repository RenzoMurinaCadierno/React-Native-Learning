import React from "react"
import { useSelector } from "react-redux"
import UI from "@app-components/UI"

export default function Body({ flexValue, fontScale }) {
  const bullets = useSelector((state) => state.contact.bullets)

  return <UI.DragNDrop fontScale={fontScale} droppables={bullets} showDemo />
}
