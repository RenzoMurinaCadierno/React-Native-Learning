import React from "react"
import UI from "@app-components/UI"
import { useSelector } from "react-redux"

export default function Toast({ fontScale, ...rest }) {
  const toast = useSelector((state) => state.contact.toast)
  console.log(toast.show)
  toast does not transition properly, disconnects view
  return (
    <UI.Toast
      show={toast.show}
      timeout={5000}
      onPressText={toast.onPressText}
      // refreshTimeoutOn={null}
      fontScale={fontScale}
      {...rest}
    >
      {toast.text}
    </UI.Toast>
  )
}
