import React from "react"
import UI from "@app-components/UI"
import { useSelector } from "react-redux"

export default function Toast({ fontScale, ...rest }) {
  const toast = useSelector((state) => state.contact.toast)

  return (
    <UI.Toast
      show={toast.show}
      manualCloseOn={!Boolean(toast.show)}
      timeout={5000}
      type="secondary"
      onPressText={toast.onPressText}
      fontScale={fontScale}
      {...rest}
    >
      {toast.text}
    </UI.Toast>
  )
}
