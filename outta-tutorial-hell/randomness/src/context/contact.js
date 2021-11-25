import React, { createContext } from "react"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

const ToastContext = createContext({
  fontScale: 17,
  headerShrinkThereshold: 300
})
const BodyContext = createContext({ fontScale: 11 })

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

function BodyContextProvider({ children }) {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(8), any: vw(6.5) })
  }

  return <BodyContext.Provider value={context}>{children}</BodyContext.Provider>
}

const Context = {
  Toast: {
    Consumable: ToastContext,
    Provider: ToastContextProvider
  },
  Body: {
    Consumable: BodyContext,
    Provider: BodyContextProvider
  }
}

export default Context
