import React, { useContext } from "react"
import UI from "@app-components/UI"
import { useSelector } from "react-redux"
import Context from "@app-context"

export default function Toast(props) {
  const { fontScale } = useContext(Context.Toast.Consumable)
  const toast = useSelector((state) => state.contact.toast)

  return (
    <UI.Toast
      show={toast.show}
      manualCloseOn={!Boolean(toast.show)}
      timeout={5000}
      type="secondary"
      onPressText={toast.onPressText}
      fontScale={fontScale}
      {...props}
    >
      {toast.text}
    </UI.Toast>
  )
}
