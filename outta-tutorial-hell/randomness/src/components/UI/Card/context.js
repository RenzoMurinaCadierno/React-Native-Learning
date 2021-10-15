import React, { createContext } from "react"
import useViewPort from "@app-hooks/useViewPort"

const CardContext = createContext(18) // arbitrary default fontScale

export function CardContextProvider({ children }) {
  const { vw } = useViewPort()

  return <CardContext.Provider value={vw}>{children}</CardContext.Provider>
}

export default CardContext
