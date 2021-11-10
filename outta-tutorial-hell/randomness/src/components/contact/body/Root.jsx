import React from "react"
import { useSelector, useDispatch } from "react-redux"
import * as contactActions from "@app-store/actions/contact"
import UI from "@app-components/UI"

export default function Body({ fontScale }) {
  const bullets = useSelector((state) => state.contact.bullets)
  const dispatch = useDispatch()

  const triggerToast = (activeItemName) =>
    dispatch(contactActions.triggerToast(activeItemName))

  return (
    <UI.DragNDrop
      fontScale={fontScale}
      droppables={bullets}
      showDemo
      onActiveItemNameChange={triggerToast}
    />
  )
}
