import React, { createContext } from "react"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

const ToastContext = createContext({ fontScale: 17 })

function ToastContextProvider({ children }) {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(5.5), any: vw(5) })
  }

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  )
}

const Context = {
  Consumable: ToastContext,
  Provider: ToastContextProvider
}

export default Context
