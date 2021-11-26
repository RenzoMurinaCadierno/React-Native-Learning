import React, { createContext } from "react"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

const BodyContext = createContext({ fontScale: 11 })

function BodyContextProvider({ children }) {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(8), any: vw(6.5) })
  }

  return <BodyContext.Provider value={context}>{children}</BodyContext.Provider>
}

const Context = {
  Body: {
    Consumable: BodyContext,
    Provider: BodyContextProvider
  }
}

export default Context
