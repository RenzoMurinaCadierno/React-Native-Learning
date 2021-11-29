import React, { useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as contactActions from "@app-store/actions/contact"
import UI from "@app-components/UI"
import Context from "@app-context"

export default function Body(props) {
  const { fontScale } = useContext(Context.Contact.Body.Consumable)
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
      {...props}
    />
  )
}
