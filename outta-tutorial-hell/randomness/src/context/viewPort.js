import React, { createContext } from "react"
import useViewPort from "@app-hooks/useViewPort"

const ViewPortContext = createContext({}) // arbitrary default fontScale

function ViewPortContextProvider({ children }) {
  const viewPortFunctions = useViewPort()

  return (
    <ViewPortContext.Provider value={viewPortFunctions}>
      {children}
    </ViewPortContext.Provider>
  )
}

const Context = {
  Consumable: ViewPortContext,
  Provider: ViewPortContextProvider
}

export default Context
