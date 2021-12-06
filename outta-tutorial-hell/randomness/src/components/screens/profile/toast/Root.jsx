import React, { useContext } from "react"
import UI from "@app-components/UI"
import { useSelector, useDispatch } from "react-redux"
import Context from "@app-context"
import store from "@app-store"

export default function Toast(props) {
  const { fontScale } = useContext(Context.Toast.Consumable)
  const toast = useSelector((state) => state.profile.toast)
  const dispatch = useDispatch()

  const resetToastState = () => {
    dispatch(store.actions.profile.triggerToast(null))
  }

  return (
    <UI.Toast
      show={toast.show}
      manualCloseOn={!Boolean(toast.show)}
      timeout={5000}
      type="secondary"
      onPressText={toast.onPressText}
      onHide={resetToastState}
      fontScale={fontScale}
      {...props}
    >
      {toast.text}
    </UI.Toast>
  )
}
